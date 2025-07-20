// route.ts (updated for Omar El Hedfi)
import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';
import data from '@/data';

/**
 * Instantiate the Gemini client using the server-side API key.
 * Ensure GEMINI_API_KEY is defined in your deployment environment (.env.local, Vercel env var, etc.).
 */
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

/**
 * Build a rich context string from your structured data object.
 *
 * Expected shape (example):
 * {
 *   contact: { email: string, ... },
 *   technologies: { skills: Array<{ name: string }> },
 *   projects: { projects: Array<{ title: string; description: string }> }
 * }
 */
const createContextFromData = () => {
  const projects = data.projects.projects
    .map((p: any) => `- ${p.title}: ${p.description}`)
    .join('\n');

  const skills = data.technologies.skills.map((s: any) => s.name).join(', ');

  return `
    About Omar El Hedfi:
    - DevSecOps & Cloud / Systems Engineer-in-training with hands-on experience building secure CI/CD pipelines and containerized deployments.
    - Background in Technologies de l'Informatique (ISET Kairouan) with strong practical exposure to Jenkins, Docker, Kubernetes, SonarQube, OWASP ZAP, Trivy, Hadolint, Dockle, and automated security scanning.
    - Experience integrating AI assistants into DevSecOps workflows and delivering monitored, production-ready environments.
    - Email: ${data.contact.email}
    
    Core Expertise:
    - DevSecOps Pipelines: Jenkins-driven CI/CD with automated security & quality gates.
    - Containers & Orchestration: Docker image build/scan; Kubernetes / Minikube deployments; health probes & rollouts.
    - Cloud & Infrastructure: Automation, infrastructure-as-code patterns, Linux server management; on‑prem & cloud-ready architectures.
    - Secure Application Development: Dependency & image scanning, policy enforcement, and secure configuration baselines.
    - Web & Mobile: React / Next.js frontends; Spring Boot & Node backends; API-first design.
    
    Systems & Architecture Capabilities:
    1. Secure DevSecOps Automation:
       - End-to-end CI/CD with integrated security scanners (SAST/DAST/container/image/dependency).
       - Artifact versioning, build provenance, and policy gating before deployment.
       - Automated email or chat notifications with summarized scan results.
    
    2. Cloud-Native & Container Platforms:
       - Kubernetes manifests with liveness/readiness probes & environment profiles (dev/prod).
       - Scalable microservice rollouts; rollback & blue/green strategies.
       - Registry integration and signed/verified container images.
    
    3. Application & Infrastructure Security:
       - Token-based auth, role-based access, input validation hardening.
       - Vulnerability scanning & patch workflows.
       - Network segmentation & VPN / secure connectivity between sites.
    
    4. Monitoring, Observability & Incident Response:
       - Metrics, logging, and alerting for critical workloads (e.g., camera servers, backup infra).
       - Automated notifications to network admins on threshold breaches.
    
    Notable Projects (from structured data):
    ${projects}
    
    Software Delivery Process:
    1. Discovery & Planning: Understand business & technical goals; capture infra constraints.
    2. Architecture & Security Design: Choose stack, threat model, compliance controls.
    3. Implementation: Iterative, testable, and security‑aware development.
    4. QA / Scanning / Optimization: Automated quality & security gates; performance checks.
    5. Deployment & Monitoring: Rollout to container/K8s infra; enable alerts & dashboards.
    6. Continuous Improvement: Feedback loops, vulnerability remediation, scaling.
    
    Services:
    - DevSecOps Pipeline Implementation
    - Secure CI/CD Integration & Automation
    - Kubernetes / Container Deployment Architecture
    - Performance & Security Hardening
    - Legacy Upgrade & Cloud Migration
    - Monitoring / Alerting Solutions
    
    Additional Information:
    - Experience working with telecom environments (e.g., Tunisie Télécom supervision) and regulated / security-sensitive contexts.
    - Advocates for secure coding, privacy, and measurable DevOps maturity.
    - Open to collaboration, consulting, and alternance / apprenticeship opportunities.
    - Continuous learner tracking emerging cloud & security tooling.
    
    Skills from data: ${skills}
  `;
};

// Limit how many trailing messages from the user conversation we forward into the Gemini chat.
const MESSAGE_HISTORY_LIMIT = 5;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
      generationConfig: {
        temperature: 0.7,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
      },
    });

    /**
     * Build a seeded chat with an initial user-style instruction that provides
     * Omar's profile context + behavior guidelines, followed by a synthetic
     * model acknowledgment message. After that we append the most recent
     * user/assistant exchanges from the incoming request body.
     */
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: `You are an AI assistant for **Omar El Hedfi**. Use the following information to help answer questions:\n\n${createContextFromData()}\n\nGuidelines:\n- Be enthusiastic, professional, and helpful.\n- Provide specific, detailed examples drawn from the context or project data.\n- Highlight relevant DevSecOps, cloud, security, and automation experience.\n- When relevant, reference Omar's projects (from the provided data).\n- Use clear structure: headings, bullet points, numbered steps.\n- Emphasize secure development, CI/CD automation, containerization, and monitoring.\n- If a request concerns collaboration, professional services, or project work, guide the user to reach out via the contact email above.\n- Keep technical claims accurate to the provided data; if unsure, say so and ask for clarification.`,
        },
        {
          role: 'model',
          parts:
            "Understood. I'll act as Omar El Hedfi's AI assistant. I'll give structured, accurate, security‑aware answers; highlight his DevSecOps, cloud, and project experience; and guide users toward collaboration when appropriate.",
        },
        ...messages.slice(-MESSAGE_HISTORY_LIMIT).map((msg: any) => ({
          role: msg.role === 'assistant' ? 'model' : 'user',
          parts: msg.content,
        })),
      ],
    });

    // Send the latest incoming message content to Gemini.
    const result = await chat.sendMessage(messages[messages.length - 1].content);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ content: text });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Failed to get AI response' },
      { status: 500 }
    );
  }
}
