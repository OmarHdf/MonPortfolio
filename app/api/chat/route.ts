import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';
import data from '@/data';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// Create a context string from your data
const createContextFromData = () => {
  const projects = data.projects.projects
    .map((p) => `- ${p.title}: ${p.description}`)
    .join('\n');

  const skills = data.technologies.skills.map((s) => s.name).join(', ');

  return `
    About Alex Muniz:
   - Senior Software Engineer specializing in secure development, mobile engineering, and cloud-based architecture
    - Over 11 years of experience in software development, frontend and cross-platform systems
    - Email: ${data.contact.email}
    
    Core Expertise:
    - React, React Native, and Flutter: Building scalable, high-performance user interfaces
    - Backend Engineering: Laravel and Golang APIs with security-first architecture
    - DevOps & Cloud: CI/CD, Docker, scalable deployment using AWS and Azure
    
    Systems & Architecture Capabilities:
    1. Legacy System Modernization:
       - Migration from outdated stacks
       - Refactoring and restructuring large codebases
       - Enhanced maintainability and modularity
       - Improved system performance and reliability

    2. Cross-Platform Mobile Development:
       - Unified codebases with Flutter or React Native
       - Native-like UX and performance
       - Offline support and real-time sync
       - Optimized app store delivery and release management

    3. Secure Application Development:
       - End-to-end encryption and token-based authentication
       - Input validation and role-based access
       - GDPR/LGPD-aligned data handling
       - Secure API communication and audits

    4. Cloud Infrastructure & DevOps:
       - CI/CD pipelines for fast, safe releases
       - Infrastructure-as-code and automated scaling
       - AWS, Azure, and Linux server management
       - Containerization with Docker and ECS
    
    Notable Projects:
    ${projects}
    
    Software Delivery Process:
    1. Discovery & Planning: Understanding business goals and user needs
    2. Architecture Design: Choosing the right stack and strategy
    3. Development: Secure, scalable implementation
    4. QA & Optimization: Performance, testing, and monitoring
    5. Launch & Maintenance: Ongoing improvements and support
    
    Services:
    - Web & Mobile App Development
    - Cloud Architecture Design
    - Performance & Security Optimization
    - Code Refactoring & Legacy Upgrades
    - DevOps and Deployment Automation
    
    Additional Information:
    - Experience with large-scale systems in regulated industries (ex: finance)
    - Strong focus on maintainable code and long-term scalability
    - Advocates for privacy, secure coding, and ethical development
    - Continuous learner with hands-on experience in evolving technologies
  `;
};

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

    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: `You are an AI assistant for Alex Muniz. Use the following information to help answer questions:
            ${createContextFromData()}
            
            Guidelines:
            - Be enthusiastic and professional
            - Provide specific, detailed examples from the context
            - Highlight relevant projects and technical capabilities
            - Be confident about secure development and cross-platform expertise
            - Emphasize practical, real-world applications
            - Keep responses well-structured with clear sections
            - Use bullet points or numbered lists for better readability
            - Always mention relevant experience and past projects
            - For specific project inquiries, guide users to the contact form
            - Focus on Alex's expertise in React, React Native, Flutter, Laravel, Golang, DevOps, and cloud (AWS/Azure)`,
        },
        {
          role: 'model',
          parts:
            "I understand. I'll act as Alex's AI assistant, providing detailed, confident responses about his extensive experience in secure development, mobile and web engineering, cloud infrastructure, and DevOps. I'll emphasize his practical approach and successful project deliveries, while maintaining professionalism and clarity.",
        },
        ...messages.slice(-MESSAGE_HISTORY_LIMIT).map((msg: any) => ({
          role: msg.role === 'assistant' ? 'model' : 'user',
          parts: msg.content,
        })),
      ],
    });

    const result = await chat.sendMessage(
      messages[messages.length - 1].content
    );
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
