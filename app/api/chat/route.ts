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
    About Aga Kadela:
    - Full Stack Product Engineer specializing in Next.js, React, and AI Integration
    - Over 10 years of experience in web development and 2 years of experience in AI implementation
    - Email: ${data.contact.email}
    
    Core Expertise:
    - Next.js & React Development: Building high-performance, scalable applications
    - AI Integration Specialist: Implementing cutting-edge AI features in web applications
    - Full Stack Development: ${skills}
    
    AI Integration Capabilities:
    1. Chatbots & Conversational AI:
       - Custom AI assistants like this one
       - Customer service automation
       - Interactive FAQ systems
       - Multi-language support
    
    2. Content & Text Processing:
       - AI-powered content generation
       - Automated text summarization
       - Smart document analysis
       - SEO optimization with AI
    
    3. Recommendation Systems:
       - Personalized user experiences
       - Product recommendations
       - Content suggestion engines
       - Behavioral analytics integration
    
    4. Process Automation:
       - Workflow automation with AI
       - Data extraction and processing
       - Form automation
       - Smart scheduling systems
    
    Notable AI Projects:
    ${projects}
    
    AI Integration Process:
    1. Requirements Analysis: Understanding specific AI needs
    2. Solution Design: Choosing the right AI models and integration methods
    3. Implementation: Seamless integration with existing systems
    4. Testing & Optimization: Ensuring accuracy and performance
    5. Monitoring & Maintenance: Continuous improvement of AI features
    
    Services:
    - Custom AI Feature Development
    - AI Model Integration
    - Performance Optimization
    - Scalability Planning
    - AI Solution Consulting
    
    Additional Information:
    - Experienced with multiple AI platforms: OpenAI, Google AI, Hugging Face
    - Custom model training and fine-tuning capabilities
    - Focus on practical, business-driven AI solutions
    - Strong emphasis on ethical AI implementation
    - Regular updates with latest AI technologies
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
          parts: `You are an AI assistant for Aga Kadela. Use the following information to help answer questions:
            ${createContextFromData()}
            
            Guidelines:
            - Be enthusiastic and professional
            - Provide specific, detailed examples from the context
            - Highlight relevant projects and technical capabilities
            - Be confident about AI integration abilities
            - Emphasize practical, real-world applications
            - Keep responses well-structured with clear sections
            - Use bullet points or numbered lists for better readability
            - Always mention relevant experience and past projects
            - For specific project inquiries, guide users to the contact form
            - Focus on Aga's expertise in Next.js, React, and advanced AI integration`,
        },
        {
          role: 'model',
          parts:
            "I understand. I'll act as Aga's AI assistant, providing detailed, confident responses about her extensive experience in AI integration, Next.js development, and full-stack capabilities. I'll emphasize her practical approach and successful project implementations while maintaining professionalism and enthusiasm.",
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
