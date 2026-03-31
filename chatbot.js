// ===== COMPREHENSIVE AI TOOLS DATABASE WITH DETAILED INFO =====
// Complete tool database with descriptions, use cases, and how-to guides
const toolDatabase = {
    // CODING TOOLS
    'chatgpt': {
        name: 'ChatGPT',
        category: 'coding',
        url: 'https://chat.openai.com',
        description: 'AI chatbot for coding, writing, and learning',
        useCase: 'Ask coding questions, generate code snippets, debug errors, explain concepts, learn programming',
        howTo: '1. Go to chat.openai.com\n2. Click "Sign Up" or "Login"\n3. Enter your email/password\n4. Create or select a chat\n5. Type your coding question\n6. AI will provide code and explanation\n7. Ask follow-up questions for more help'
    },
    'github copilot': {
        name: 'GitHub Copilot',
        category: 'coding',
        url: 'https://github.com/features/copilot',
        description: 'AI pair programmer for code auto-completion',
        useCase: 'Get real-time code suggestions while typing, auto-complete functions, generate entire code blocks',
        howTo: '1. Install GitHub Copilot extension in VS Code\n2. Authenticate with GitHub\n3. Open any code file\n4. Start typing a function comment\n5. Copilot will suggest code\n6. Press Tab to accept, Esc to reject\n7. Continue coding with AI assistance'
    },
    'codeium': {
        name: 'Codeium',
        category: 'coding',
        url: 'https://codeium.com',
        description: 'Free AI code completion tool',
        useCase: 'Free alternative to Copilot, supports all languages, instant code suggestions',
        howTo: '1. Visit codeium.com\n2. Install extension for your editor (VS Code, Sublime, etc)\n3. Sign up with email\n4. Grant permissions\n5. Open a code file\n6. Start typing code\n7. Codeium will auto-suggest completions\n8. Press Tab or Enter to accept'
    },

    // VIDEO EDITING TOOLS
    'capcut': {
        name: 'CapCut',
        category: 'video',
        url: 'https://www.capcut.com',
        description: 'Free AI video editor with auto captions',
        useCase: 'Edit videos, add effects, remove backgrounds, auto-generate captions, create viral short videos',
        howTo: '1. Go to capcut.com (web) or download app\n2. Click "Create a video"\n3. Upload video or choose template\n4. Drag video to timeline\n5. Use effects & transitions\n6. Click "Auto Caption" for auto subtitles\n7. Add text, music, effects\n8. Click "Export" to save\n9. Choose quality and download'
    },
    'runway': {
        name: 'Runway ML',
        category: 'video',
        url: 'https://runwayml.com',
        description: 'AI magic tools for video, image, and music',
        useCase: 'Remove backgrounds, generate AI videos, edit with magic tools, create animations',
        howTo: '1. Go to runwayml.com\n2. Sign up with email\n3. Create new project\n4. Upload video/image\n5. Select desired tool (Remove Background, Generate, etc)\n6. Adjust settings\n7. Let AI process (may take time)\n8. Download result\n9. Save or use in another project'
    },
    'midjourney': {
        name: 'Midjourney',
        category: 'image',
        url: 'https://www.midjourney.com',
        description: 'Premium AI image generation',
        useCase: 'Generate stunning artwork, create design concepts, produce high-quality images from text descriptions',
        howTo: '1. Join Discord and visit Midjourney server\n2. Subscribe to plan (paid)\n3. Go to a newbies channel\n4. Type /imagine\n5. Write detailed image description\n6. AI generates 4 variations\n7. Click U1-U4 to upscale or V1-V4 to create variations\n8. Download final image'
    },

    // IMAGE GENERATION
    'dall-e': {
        name: 'DALL·E',
        category: 'image',
        url: 'https://openai.com/dall-e-3',
        description: 'OpenAI text-to-image generation',
        useCase: 'Create images from text descriptions, generate art, design graphics, edit and create variations',
        howTo: '1. Visit openai.com/dall-e\n2. Log in with ChatGPT account\n3. Click "Generate"\n4. Write detailed description (e.g., "A sunset over mountains, oil painting style")\n5. Click Generate\n6. AI creates image\n7. Click to use/edit or generate variations\n8. Download image when satisfied'
    },
    'leonardo ai': {
        name: 'Leonardo AI',
        category: 'image',
        url: 'https://leonardo.ai',
        description: 'Real-time AI image generation',
        useCase: 'Generate images in real-time, use custom models, create consistent characters',
        howTo: '1. Go to leonardo.ai\n2. Sign up free\n3. Click "Create"\n4. Choose model\n5. Write image description\n6. Adjust settings (style, quality)\n7. Click "Generate"\n8. Images appear in real-time\n9. Upscale or download favorite images'
    },

    // PRESENTATION TOOLS
    'beautiful ai': {
        name: 'Beautiful.ai',
        category: 'ppt',
        url: 'https://www.beautiful.ai',
        description: 'AI design assistant for presentations',
        useCase: 'Create professional presentations, auto-design slides, edit with AI suggestions',
        howTo: '1. Visit beautiful.ai\n2. Sign up/login\n3. Click "Create Presentation"\n4. Choose template\n5. Edit title and content\n6. AI auto-designs slides\n7. Add more slides with "+"\n8. Edit text and images\n9. Preview and present\n10. Download as PDF or PPT'
    },
    'gamma': {
        name: 'Gamma AI',
        category: 'ppt',
        url: 'https://gamma.app',
        description: 'Create presentations, documents, and webpages with AI',
        useCase: 'Generate presentation from text, create beautiful decks, share interactive presentations',
        howTo: '1. Go to gamma.app\n2. Click "Create new"\n3. Paste text or write description of your presentation\n4. Click "Generate"\n5. AI creates entire presentation\n6. Edit slides, add images\n7. Customize colors and fonts\n8. Click "Share" for link\n9. Present or download'
    },

    // AUDIO/VOICE TOOLS
    'elevenlabs': {
        name: 'ElevenLabs',
        category: 'audio',
        url: 'https://elevenlabs.io',
        description: 'Premium AI text-to-speech',
        useCase: 'Convert text to natural-sounding speech, generate voiceovers, create multiple languages',
        howTo: '1. Visit elevenlabs.io\n2. Sign up (free tier available)\n3. Click "Text to Speech"\n4. Paste text\n5. Select voice (many options)\n6. Adjust speed/tone\n7. Click "Generate"\n8. Listen to preview\n9. Download MP3 if satisfied'
    },
    'murf': {
        name: 'Murf AI',
        category: 'audio',
        url: 'https://murf.ai',
        description: 'Ultra-realistic AI voice generator',
        useCase: 'Create podcast voiceovers, generate educational content, build presentations with voice',
        howTo: '1. Go to murf.ai\n2. Sign up free\n3. Choose "Voice Over" or "Podcast"\n4. Upload script or paste text\n5. Select voice (multiple languages)\n6. Adjust speed and emotion\n7. Click "Generate"\n8. Preview audio\n9. Download MP3 file'
    },

    // WRITING TOOLS
    'jasper': {
        name: 'Jasper',
        category: 'writing',
        url: 'https://www.jasper.ai',
        description: 'AI copywriting assistant',
        useCase: 'Write blog posts, create social media content, generate marketing copy, write product descriptions',
        howTo: '1. Visit jasper.ai\n2. Sign up (free trial available)\n3. Click "Create" > "New Document"\n4. Choose template (blog, ad copy, email, etc)\n5. Fill in details about topic\n6. Click "Generate"\n7. Jasper creates content\n8. Edit and refine\n9. Export as document'
    },
    'grammarly': {
        name: 'Grammarly',
        category: 'writing',
        url: 'https://www.grammarly.com',
        description: 'AI writing assistant for grammar and tone',
        useCase: 'Fix grammar errors, improve writing tone, check plagiarism, get suggestions',
        howTo: '1. Visit grammarly.com\n2. Sign up free\n3. Install browser extension\n4. Write in any text field\n5. Grammarly auto-checks as you type\n6. See suggestions for grammar, tone, clarity\n7. Click suggestions to accept/reject\n8. See score at bottom\n9. Improve writing'
    },

    // MARKETING TOOLS
    'hubspot': {
        name: 'HubSpot',
        category: 'marketing',
        url: 'https://www.hubspot.com',
        description: 'AI-powered CRM and marketing platform',
        useCase: 'Manage leads, create email campaigns, track customers, automate marketing workflows',
        howTo: '1. Go to hubspot.com\n2. Sign up free\n3. Create account\n4. Add contacts to CRM\n5. Go to Marketing > Email\n6. Click "Create email"\n7. Choose template\n8. Write email copy\n9. Add audience\n10. Schedule or send\n11. Track opens and clicks'
    },

    // PRODUCTIVITY TOOLS
    'notion ai': {
        name: 'Notion AI',
        category: 'productivity',
        url: 'https://www.notion.so',
        description: 'AI writing assistant in Notion',
        useCase: 'Generate ideas, write faster, summarize content, organize thoughts with AI help',
        howTo: '1. Open Notion workspace\n2. Create new page\n3. Type "/" to see commands\n4. Click "Ask AI"\n5. Choose action (write, improve, summarize, etc)\n6. AI generates content\n7. Edit and refine\n8. Use in your Notion pages'
    }
};

// ===== AI TOOLS DATASET (HARDCODED FOR OFFLINE USE) =====
// ===== AI TOOLS DATASET (HARDCODED FOR OFFLINE USE - ALL 10 CATEGORIES) =====
// This ensures the chatbot works even if script.js hasn't loaded yet
const chatbotToolsData = {
    coding: {
        name: "Coding AI Tools",
        icon: "💻",
        tools: [
            { name: "ChatGPT", url: "https://chatgpt.com/", description: "AI for code generation and debugging", badge: "🔥 Trending" },
            { name: "GitHub Copilot", url: "https://github.com/features/copilot", description: "AI pair programmer", badge: "⭐ Popular" },
            { name: "Codeium", url: "https://codeium.com", description: "Free AI code completion", badge: "🆓 Free" },
            { name: "Cursor", url: "https://www.cursor.com", description: "AI-first code editor", badge: "✨ New" },
            { name: "TabNine", url: "https://www.tabnine.com", description: "Deep learning code completion", badge: "🆓 Free" }
        ]
    },
    video: {
        name: "Video Editing AI Tools",
        icon: "🎬",
        tools: [
            { name: "CapCut AI", url: "https://www.capcut.com", description: "Free AI video editor with auto captions", badge: "🆓 Free" },
            { name: "Runway ML", url: "https://runwayml.com", description: "AI magic tools for video and image", badge: "⭐ Popular" },
            { name: "Synthesia", url: "https://www.synthesia.io", description: "Create AI avatar videos", badge: "⭐ Popular" },
            { name: "HeyGen", url: "https://www.heygen.com", description: "AI avatar video creator", badge: "⭐ Popular" },
            { name: "Opus Clip", url: "https://www.opus.pro", description: "Auto-generate viral video clips", badge: "🔥 Trending" }
        ]
    },
    imageEditing: {
        name: "Image Editing AI Tools",
        icon: "🖼️",
        tools: [
            { name: "Adobe Photoshop AI", url: "https://www.adobe.com/products/photoshop", description: "Professional editing with Generative Fill", badge: "⭐ Popular" },
            { name: "Canva Pro", url: "https://www.canva.com", description: "Design with AI image enhancement", badge: "🔥 Trending" },
            { name: "Remove.bg", url: "https://www.remove.bg", description: "Automatic background removal", badge: "🆓 Free" },
            { name: "Cleanup.pictures", url: "https://cleanup.pictures", description: "Remove unwanted objects", badge: "🆓 Free" },
            { name: "Topaz Gigapixel AI", url: "https://www.topazlabs.com", description: "Professional image upscaling", badge: "⭐ Popular" }
        ]
    },
    videoGen: {
        name: "Video Generation AI Tools",
        icon: "🎥",
        tools: [
            { name: "Runway ML", url: "https://runwayml.com", description: "Generate videos from text", badge: "🔥 Trending" },
            { name: "Pika Labs", url: "https://pika.art", description: "AI video generation and editing", badge: "🔥 Trending" },
            { name: "D-ID", url: "https://www.d-id.com", description: "Generate talking avatar videos", badge: "✨ New" },
            { name: "Steve AI", url: "https://www.steve.ai", description: "Create videos from text", badge: "🆓 Free" },
            { name: "Animaker", url: "https://www.animaker.com", description: "Animated video creator with AI", badge: "⭐ Popular" }
        ]
    },
    ppt: {
        name: "PPT/Presentation AI Tools",
        icon: "📊",
        tools: [
            { name: "Beautiful.ai", url: "https://www.beautiful.ai", description: "AI design for presentations", badge: "⭐ Popular" },
            { name: "Tome", url: "https://tome.app", description: "AI-powered storytelling presentations", badge: "🔥 Trending" },
            { name: "Gamma AI", url: "https://gamma.app", description: "Create presentations and documents", badge: "⭐ Popular" },
            { name: "Decktopus", url: "https://www.decktopus.com", description: "AI slideshow creator", badge: "🆓 Free" },
            { name: "Slidesai.io", url: "https://www.slidesai.io", description: "Turn text into presentations", badge: "🆓 Free" }
        ]
    },
    image: {
        name: "Image/Photo Generation AI Tools",
        icon: "🎨",
        tools: [
            { name: "DALL·E 3", url: "https://openai.com/dall-e-3", description: "OpenAI's premium image generation", badge: "🔥 Trending" },
            { name: "Midjourney", url: "https://www.midjourney.com", description: "Premium artistic AI images", badge: "⭐ Popular" },
            { name: "Leonardo AI", url: "https://leonardo.ai", description: "Real-time image generation", badge: "🆓 Free" },
            { name: "Stable Diffusion", url: "https://stablediffusion.com", description: "Open-source image generation", badge: "🆓 Free" },
            { name: "Adobe Firefly", url: "https://www.adobe.com/products/firefly", description: "AI generative for images", badge: "🆓 Free" }
        ]
    },
    writing: {
        name: "Writing/Content AI Tools",
        icon: "✍️",
        tools: [
            { name: "ChatGPT", url: "https://chatgpt.com/", description: "Advanced AI for content creation", badge: "🔥 Trending" },
            { name: "Jasper", url: "https://www.jasper.ai", description: "AI copywriting assistant", badge: "⭐ Popular" },
            { name: "Copy.ai", url: "https://www.copy.ai", description: "AI content generator", badge: "⭐ Popular" },
            { name: "Grammarly", url: "https://www.grammarly.com", description: "AI writing assistant", badge: "⭐ Popular" },
            { name: "Quillbot", url: "https://quillbot.com", description: "AI paraphraser", badge: "🆓 Free" }
        ]
    },
    audio: {
        name: "Music/Audio AI Tools",
        icon: "🎵",
        tools: [
            { name: "Elevenlabs", url: "https://elevenlabs.io", description: "Premium AI text-to-speech", badge: "⭐ Popular" },
            { name: "Murf AI", url: "https://murf.ai", description: "AI voice generator for podcasts", badge: "🆓 Free" },
            { name: "Descript", url: "https://www.descript.com", description: "Record and edit audio/video", badge: "⭐ Popular" },
            { name: "Loudly", url: "https://www.loudly.com", description: "AI music generation", badge: "🆓 Free" },
            { name: "Google NotebookLM", url: "https://notebooklm.google", description: "Create podcast from documents", badge: "✨ New" }
        ]
    },
    marketing: {
        name: "Business/Marketing AI Tools",
        icon: "📢",
        tools: [
            { name: "HubSpot", url: "https://www.hubspot.com", description: "AI CRM and marketing automation", badge: "⭐ Popular" },
            { name: "Persado", url: "https://www.persado.com", description: "AI language generation for campaigns", badge: "⭐ Popular" },
            { name: "Adcreative.ai", url: "https://www.adcreative.ai", description: "AI ad creative generator", badge: "🔥 Trending" },
            { name: "Klaviyo", url: "https://www.klaviyo.com", description: "AI email marketing", badge: "⭐ Popular" },
            { name: "Conversion.ai", url: "https://www.conversion.ai", description: "AI content creator", badge: "🆓 Free" }
        ]
    },
    education: {
        name: "Study/Education AI Tools",
        icon: "🎓",
        tools: [
            { name: "ChatGPT", url: "https://chatgpt.com/", description: "AI tutor for homework help", badge: "🆓 Free" },
            { name: "Wolfram Alpha", url: "https://www.wolframalpha.com", description: "Math and science engine", badge: "🆓 Free" },
            { name: "Khan Academy", url: "https://www.khanacademy.org", description: "AI-powered learning", badge: "🆓 Free" },
            { name: "Duolingo", url: "https://www.duolingo.com", description: "AI language learning", badge: "🆓 Free" },
            { name: "Coursera", url: "https://www.coursera.org", description: "Courses with AI recommendations", badge: "🆓 Free" }
        ]
    },
    productivity: {
        name: "Productivity AI Tools",
        icon: "⚡",
        tools: [
            { name: "Notion AI", url: "https://www.notion.so", description: "AI in workspace", badge: "⭐ Popular" },
            { name: "Microsoft Copilot", url: "https://copilot.microsoft.com", description: "AI in Office products", badge: "⭐ Popular" },
            { name: "Zapier", url: "https://zapier.com", description: "Workflow automation with AI", badge: "⭐ Popular" },
            { name: "Otter.ai", url: "https://otter.ai", description: "AI meeting assistant", badge: "⭐ Popular" },
            { name: "Taskade AI", url: "https://www.taskade.com", description: "AI task management", badge: "🆓 Free" }
        ]
    }
};

// ===== MULTILINGUAL KEYWORD MAPPING SYSTEM =====

const LANGUAGE_KEYWORDS = {
    // ===== VIDEO/EDITING =====
    video: {
        en: ['video', 'edit', 'editing', 'capcut', 'runway', 'synthesia', 'descript', 'opus', 'clip', 'film', 'movie', 'production'],
        hi: ['वीडियो', 'संपादन', 'एडिट', 'फ़िल्म', 'फिल्म'],
        hinglish: ['video', 'edit', 'editing', 'vdo', 'filmmaking', 'video banana', 'video editing', 'movie making']
    },

    // ===== CODING/PROGRAMMING =====
    coding: {
        en: ['code', 'coding', 'program', 'programmer', 'developer', 'development', 'chatgpt', 'copilot', 'codeium', 'tabnine', 'whisperer'],
        hi: ['कोडिंग', 'कोड', 'प्रोग्रामिंग', 'डेवलपर', 'विकास'],
        hinglish: ['code', 'coding', 'programming', 'coder', 'developer', 'coding ke liye', 'programming tool', 'development']
    },

    // ===== IMAGE GENERATION =====
    image: {
        en: ['image', 'picture', 'photo', 'design', 'graphic', 'art', 'generate', 'dall-e', 'midjourney', 'leonardo', 'firefly', 'stable', 'ai image'],
        hi: ['इमेज', 'चित्र', 'तस्वीर', 'फोटो', 'डिज़ाइन', 'ड्राइंग', 'आर्ट'],
        hinglish: ['image', 'photo', 'picture', 'design', 'drawing', 'image generation', 'pic banana', 'photo banana', 'design banana']
    },

    // ===== PRESENTATION/POWERPOINT =====
    ppt: {
        en: ['presentation', 'ppt', 'powerpoint', 'slide', 'slides', 'deck', 'beautiful', 'tome', 'gamma', 'decktopus'],
        hi: ['प्रस्तुति', 'स्लाइड', 'प्रेजेंटेशन', 'पी.पी.टी'],
        hinglish: ['presentation', 'ppt', 'powerpoint', 'slide', 'slides', 'presentation banana', 'ppt banana']
    },

    // ===== AUDIO/VOICE/PODCAST =====
    audio: {
        en: ['audio', 'voice', 'podcast', 'speech', 'tts', 'elevenlabs', 'murf', 'voiceover', 'music', 'sound'],
        hi: ['आवाज़', 'ऑडियो', 'संगीत', 'पॉडकास्ट'],
        hinglish: ['audio', 'voice', 'podcast', 'sound', 'music', 'voiceover', 'voice generation', 'podcast tool']
    },

    // ===== WRITING/CONTENT =====
    writing: {
        en: ['write', 'writing', 'content', 'blog', 'email', 'copy', 'text', 'jasper', 'grammarly', 'quillbot', 'copywriting'],
        hi: ['लेखन', 'लिखना', 'सामग्री', 'ब्लॉग', 'संपादन'],
        hinglish: ['writing', 'content', 'blog', 'email', 'copy', 'likhna', 'content banana', 'writing tool']
    },

    // ===== MARKETING =====
    marketing: {
        en: ['marketing', 'campaign', 'ads', 'advertisement', 'seo', 'hubspot', 'persado', 'email marketing'],
        hi: ['मार्केटिंग', 'विज्ञापन', 'प्रचार'],
        hinglish: ['marketing', 'campaign', 'ads', 'promotion', 'marketing tool']
    },

    // ===== PRODUCTIVITY =====
    productivity: {
        en: ['productivity', 'task', 'automation', 'notion', 'zapier', 'otter', 'calendly', 'scheduling', 'manage', 'organize'],
        hi: ['उत्पादकता', 'कार्य', 'स्वचालन'],
        hinglish: ['productivity', 'task', 'automation', 'management', 'organize']
    },

    // ===== IMAGE EDITING/MANIPULATION =====
    imageEditing: {
        en: ['image editing', 'edit image', 'remove background', 'upscale', 'photo editor', 'remove.bg', 'cleanup', 'photoshop', 'enhance image', 'background removal'],
        hi: ['इमेज संपादन', 'फोटो संपादन', 'पृष्ठभूमि', 'वृद्धि', 'छवि संपादक'],
        hinglish: ['image edit', 'photo edit', 'background remove', 'image enhance', 'image editing tool', 'cleanup tool']
    },

    // ===== VIDEO GENERATION =====
    videoGen: {
        en: ['generate video', 'create video', 'ai video', 'video generation', 'text to video', 'runway', 'pika', 'd-id', 'animate', 'animated video'],
        hi: ['वीडियो जनरेट', 'वीडियो बनाना', 'एआई वीडियो', 'टेक्स्ट टू वीडियो'],
        hinglish: ['video generate', 'video banana', 'ai video', 'animated video', 'text se video', 'video creation tool']
    },

    // ===== EDUCATION/LEARNING =====
    education: {
        en: ['education', 'learning', 'study', 'homework', 'course', 'tutor', 'learn', 'academic', 'khan academy', 'duolingo', 'coursera', 'student'],
        hi: ['शिक्षा', 'सीखना', 'अध्ययन', 'होमवर्क', 'पाठ्यक्रम', 'गृहकार्य'],
        hinglish: ['education', 'learning', 'study', 'homework', 'course', 'padhai', 'seekhna', 'student', 'padhai tool']
    },

    // ===== SPECIAL QUERIES =====
    free: {
        en: ['free', 'no cost', 'no payment', 'open source', 'freemium'],
        hi: ['मुफ़्त', 'फ्री', 'निःशुल्क'],
        hinglish: ['free', 'no cost', 'free ka']
    },

    popular: {
        en: ['best', 'popular', 'trending', 'top', 'most used'],
        hi: ['सर्वश्रेष्ठ', 'लोकप्रिय', 'शीर्ष'],
        hinglish: ['best', 'popular', 'trending', 'top']
    }
};

// ===== LANGUAGE DETECTION & NORMALIZATION =====
class LanguageAnalyzer {
    constructor() {
        this.devanagariRegex = /[\u0900-\u097F]/g;
    }

    detectLanguage(text) {
        // If text contains Devanagari script, it's Hindi
        if (this.devanagariRegex.test(text)) {
            return 'hindi';
        }
        // Check for Hinglish patterns (mix of English + Hindi romanization)
        if (this.isHinglish(text)) {
            return 'hinglish';
        }
        return 'english';
    }

    isHinglish(text) {
        const hinglishPatterns = [
            /\b(ke|ka|ki|ko|se|sa|si|so|hai|hain|kya|aur|ya|jo|ne|ne|ke liye)\b/i,
            /\b(banana|dena|karna|bolna|dekhna|likna|bnanna)\b/i,
            /\b(konsa|kaun|kya|kaise|kyun|kab|kaha)\b/i
        ];
        return hinglishPatterns.some(pattern => pattern.test(text));
    }

    normalize(text) {
        return text.toLowerCase()
            .replace(/[^\wà-ÿ\s\u0900-\u097F]/g, '') // Remove special chars but keep Devanagari
            .trim();
    }

    extractCategory(text) {
        const normalized = this.normalize(text);
        const language = this.detectLanguage(text);

        // Check each category
        for (const [category, keywords] of Object.entries(LANGUAGE_KEYWORDS)) {
            if (category === 'free' || category === 'popular') continue; // Handle separately

            const keywordList = keywords[language] || keywords.en;
            if (keywordList.some(keyword => normalized.includes(keyword.toLowerCase()))) {
                return category;
            }
        }

        return null;
    }

    hasModifier(text, modifier) {
        const modifierKeywords = LANGUAGE_KEYWORDS[modifier];
        const normalized = this.normalize(text);
        
        if (modifierKeywords) {
            const allKeywords = [
                ...modifierKeywords.en,
                ...modifierKeywords.hi,
                ...modifierKeywords.hinglish
            ];
            return allKeywords.some(kw => normalized.includes(kw.toLowerCase()));
        }
        return false;
    }
}

// ===== CHATBOT CONTROLLER =====

class AIAssistantChatbot {
    constructor() {
        this.isOpen = false;
        this.voiceEnabled = false;
        this.isListening = false;
        this.isProcessing = false;
        this.chatHistory = this.loadChatHistory();
        this.languageAnalyzer = new LanguageAnalyzer();
        this.initElements();
        this.initSpeechRecognition();
        this.initSpeechSynthesis();
        this.setupEventListeners();
        this.renderChatHistory();
    }

    // Initialize DOM elements
    initElements() {
        this.toggle = document.getElementById('chatbot-toggle');
        this.window = document.getElementById('chatbot-window');
        this.closeBtn = document.getElementById('chatbot-close');
        this.clearBtn = document.getElementById('clear-chat');
        this.voiceToggle = document.getElementById('voice-toggle');
        this.voiceInputBtn = document.getElementById('voice-input-btn');
        this.sendBtn = document.getElementById('send-btn');
        this.input = document.getElementById('chatbot-input');
        this.messagesContainer = document.getElementById('chatbot-messages');
        this.typingIndicator = document.getElementById('typing-indicator');
        this.notificationBadge = document.getElementById('notification-badge');

        // Log initialization
        console.log('🔧 Chatbot DOM elements:');
        console.log('  - Toggle button:', !!this.toggle);
        console.log('  - Window:', !!this.window);
        console.log('  - Input field:', !!this.input);
        console.log('  - Voice input button:', !!this.voiceInputBtn);
        console.log('  - Messages container:', !!this.messagesContainer);
        console.log('  - Send button:', !!this.sendBtn);
        
        if (!this.toggle || !this.input || !this.messagesContainer) {
            console.error('❌ Critical chatbot elements missing!');
        }
        
        if (!this.voiceInputBtn) {
            console.warn('⚠️ Voice input button not found - voice feature will be disabled');
        }
    }

    // Initialize Speech Recognition (Web Speech API)
    initSpeechRecognition() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        
        if (!SpeechRecognition) {
            console.warn('⚠️ Speech Recognition not supported in this browser');
            if (this.voiceInputBtn) {
                this.voiceInputBtn.disabled = true;
                this.voiceInputBtn.title = 'Voice input not supported in your browser';
            }
            return;
        }

        console.log('✅ Speech Recognition API initialized');

        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false; // Auto-stop after result received
        this.recognition.interimResults = true;
        this.recognition.maxAlternatives = 1; // Only need the best match
        this.recognition.lang = 'en-US'; // Default language (en-US)

        // Track for auto-stop
        this.finalTranscriptReceived = false;
        this.silenceTimeout = null;

        console.log('🔧 Speech Recognition settings:');
        console.log('   - continuous:', this.recognition.continuous);
        console.log('   - interimResults:', this.recognition.interimResults);
        console.log('   - maxAlternatives:', this.recognition.maxAlternatives);
        console.log('   - language:', this.recognition.lang);

        this.recognition.onstart = () => {
            console.log('🎤 Voice recognition STARTED');
            console.log('   - Waiting for speech input...');
            this.isListening = true;
            this.finalTranscriptReceived = false;
            
            if (this.voiceInputBtn) {
                this.voiceInputBtn.classList.add('listening');
                this.voiceInputBtn.style.backgroundColor = '#ff4444';
                this.voiceInputBtn.style.transform = 'scale(1.1)';
            }
            
            this.input.placeholder = '🎤 Listening...';
            this.input.disabled = false;
            this.input.value = '';
            console.log('📝 Input field cleared and ready');
        };

        this.recognition.onresult = (event) => {
            console.log('📨 Voice result event received');
            console.log('  - resultIndex:', event.resultIndex);
            console.log('  - results.length:', event.results.length);
            
            let interimTranscript = '';
            let finalTranscript = '';
            
            // Check if results array is empty
            if (!event.results || event.results.length === 0) {
                console.warn('⚠️ No speech results detected');
                this.input.placeholder = '❌ No speech detected - please try again';
                return;
            }
            
            for (let i = event.resultIndex; i < event.results.length; i++) {
                // Correct way to access transcript: event.results[i][0].transcript
                const result = event.results[i];
                
                if (!result || !result[0]) {
                    console.warn(`⚠️ Result ${i} is empty or malformed`);
                    continue;
                }
                
                // Get the transcript from the first alternative (highest confidence)
                const transcript = result[0].transcript;
                const confidence = result[0].confidence;
                const isFinal = result.isFinal;
                
                console.log(`  Result ${i}: "${transcript}" [confidence: ${(confidence * 100).toFixed(0)}%, isFinal: ${isFinal}]`);
                
                if (isFinal) {
                    finalTranscript += transcript + ' ';
                } else {
                    interimTranscript += transcript;
                }
            }
            
            // Handle final transcript
            if (finalTranscript) {
                this.finalTranscriptReceived = true;
                const cleanTranscript = finalTranscript.trim();
                
                if (!cleanTranscript) {
                    console.warn('⚠️ Final transcript is empty after trimming');
                    this.input.placeholder = '❌ Could not understand - please try again';
                    return;
                }
                
                this.input.value = cleanTranscript;
                this.input.placeholder = '✅ Click Send or press Enter';
                console.log('✅ Final transcription captured:', cleanTranscript);
                console.log('   Input field updated successfully');
                
                // Clear any existing silence timeout
                if (this.silenceTimeout) {
                    clearTimeout(this.silenceTimeout);
                }
                
                // Auto-stop after speech detected (with small delay for additional speech)
                this.silenceTimeout = setTimeout(() => {
                    console.log('⏹️ Auto-stopping recognition after 1 second of silence');
                    this.recognition.stop();
                }, 1000);
            } 
            // Show interim results
            else if (interimTranscript) {
                this.input.placeholder = `🎤 ${interimTranscript}`;
                console.log('⏳ Interim transcription:', interimTranscript);
            }
        };

        this.recognition.onerror = (event) => {
            console.error('❌ Voice Recognition Error:', event.error);
            
            // Handle specific errors
            const errorMessages = {
                'network': '❌ Network error - check your internet connection',
                'no-speech': '❌ No speech detected - try again',
                'audio-capture': '❌ Microphone not accessible - check permissions',
                'not-allowed': '❌ Microphone permission denied',
                'bad-grammar': '❌ Language model error',
                'service-not-allowed': '❌ Speech service not available'
            };
            
            const errorMsg = errorMessages[event.error] || `❌ Error: ${event.error}`;
            this.input.placeholder = errorMsg;
            console.log('🔴 Error message displayed:', errorMsg);
        };

        this.recognition.onend = () => {
            console.log('🛑 Voice recognition STOPPED');
            this.isListening = false;
            
            if (this.voiceInputBtn) {
                this.voiceInputBtn.classList.remove('listening');
                this.voiceInputBtn.style.backgroundColor = '';
                this.voiceInputBtn.style.transform = '';
            }
            
            // Reset placeholder if no text was captured
            if (!this.input.value) {
                this.input.placeholder = 'Type or click 🎤 to speak...';
            }
            
            this.input.disabled = false;
            this.input.focus();
            
            // Clear any pending timeout
            if (this.silenceTimeout) {
                clearTimeout(this.silenceTimeout);
            }
            
            console.log('✅ Ready for next input. Current text:', this.input.value);
            
            // AUTO-SUBMIT: If text was captured, automatically send the message
            if (this.input.value && this.input.value.trim() && !this.isProcessing) {
                console.log('📤 Auto-submitting voice transcription:', this.input.value);
                setTimeout(() => {
                    this.sendMessage();
                }, 300); // Small delay to allow UI to update
            }
        };

        console.log('✅ Speech Recognition event handlers configured');
    }

    // Initialize Speech Synthesis (Text-to-Speech API)
    initSpeechSynthesis() {
        const SpeechSynthesis = window.speechSynthesis;
        
        if (!SpeechSynthesis) {
            console.warn('Speech Synthesis not supported');
            this.voiceToggle.disabled = true;
            return;
        }

        this.synthesis = SpeechSynthesis;
    }

    // Setup Event Listeners
    setupEventListeners() {
        if (!this.toggle) {
            console.error('❌ Chatbot toggle button not found!');
            return;
        }

        this.toggle.addEventListener('click', () => {
            console.log('💬 Chatbot toggle clicked');
            this.toggleChat();
        });

        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => {
                console.log('❌ Close button clicked');
                this.closeChat();
            });
        }

        if (this.clearBtn) {
            this.clearBtn.addEventListener('click', () => {
                console.log('🗑️ Clear chat clicked');
                this.clearChat();
            });
        }

        if (this.sendBtn) {
            this.sendBtn.addEventListener('click', () => {
                console.log('📤 Send button clicked');
                this.sendMessage();
            });
        }

        if (this.voiceInputBtn) {
            this.voiceInputBtn.addEventListener('click', () => {
                console.log('🎤 Voice input button clicked');
                console.log('   - isListening:', this.isListening);
                this.toggleVoiceInput();
            });
        } else {
            console.warn('⚠️ Voice input button not found in DOM');
        }

        if (this.voiceToggle) {
            this.voiceToggle.addEventListener('click', () => {
                console.log('🔊 Voice toggle clicked');
                this.toggleVoiceOutput();
            });
        }

        if (this.input) {
            this.input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey && !this.isProcessing) {
                    e.preventDefault();
                    console.log('⌨️ Enter key pressed');
                    this.sendMessage();
                }
            });
        }

        console.log('✅ All event listeners attached');
    }

    // Toggle Chat Window
    toggleChat() {
        if (this.isOpen) {
            this.closeChat();
        } else {
            this.openChat();
        }
    }

    openChat() {
        this.isOpen = true;
        this.window.classList.add('active');
        this.input.focus();
        this.notificationBadge.style.display = 'none';
    }

    closeChat() {
        this.isOpen = false;
        this.window.classList.remove('active');
        if (this.isListening) {
            this.recognition.stop();
        }
    }

    // Clear Chat
    clearChat() {
        if (confirm('Clear all messages? This action cannot be undone.')) {
            this.chatHistory = [];
            this.saveChatHistory();
            this.messagesContainer.innerHTML = `
                <div class="message bot-message">
                    <div class="message-content">
                        <p>👋 Hi! I cleared our chat history. Ask me about AI tools!</p>
                    </div>
                    <span class="message-time">Now</span>
                </div>
            `;
            this.scrollToBottom();
        }
    }

    // Toggle Voice Input
    toggleVoiceInput() {
        if (!this.recognition) {
            console.error('❌ Speech Recognition API not available');
            alert('Voice input is not supported in your browser. Please use Chrome, Edge, or Safari.');
            return;
        }

        if (this.isListening) {
            console.log('🛑 Stopping voice recognition (user clicked stop)');
            try {
                this.recognition.stop();
            } catch (error) {
                console.error('❌ Error stopping recognition:', error);
            }
        } else {
            console.log('🎤 Starting voice recognition');
            console.log('   Language:', this.recognition.lang);
            this.input.value = '';
            this.input.placeholder = '🎤 Listening...';
            
            try {
                this.recognition.start();
                console.log('✅ Recognition.start() called successfully');
            } catch (error) {
                console.error('❌ Error starting recognition:', error);
                this.input.placeholder = '❌ Could not start voice recognition';
                
                // Check if error is because recognition is already running
                if (error.message && error.message.includes('already started')) {
                    console.log('ℹ️ Recognition is already running');
                }
            }
        }
    }

    // Toggle Voice Output
    toggleVoiceOutput() {
        this.voiceEnabled = !this.voiceEnabled;
        const icon = this.voiceToggle.querySelector('.voice-icon');
        if (this.voiceEnabled) {
            icon.textContent = '🔊';
            icon.classList.add('active');
        } else {
            icon.textContent = '🔇';
            icon.classList.remove('active');
        }
    }

    // Speak Text (Multilingual Support)
    speakText(text, language = 'english') {
        if (!this.voiceEnabled || !this.synthesis) return;

        // Cancel any ongoing speech
        this.synthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.95;
        utterance.pitch = 1;
        utterance.volume = 1;
        
        // Set language code for speech synthesis
        const languageMap = {
            english: 'en-US',
            hindi: 'hi-IN',
            hinglish: 'en-IN' // Hinglish uses English with Indian accent
        };
        
        utterance.lang = languageMap[language] || 'en-US';

        this.synthesis.speak(utterance);
    }

    // Check if input is a love target (special names)
    isLoveTarget(text) {
        const loveTargets = ['d malini', 'bindurani'];
        return loveTargets.some(target => text.toLowerCase().includes(target));
    }

    // Generate Special Love Animation Response
    generateLoveResponse() {
        const loveEmojis = '💖 ❤️ 💕 💞 ❤️ 💖 💕 😍 🥰 😍 😘 😘 😘 😘 😘 😘 😘 😘 ❤️ 💖 ❤️ 💖 ❤️ 💖 ❤️ 💖 ❤️ 💖 ✨';
        
        const message = `${loveEmojis}<br><br>✨ Welcome to this special space! ✨<br><br><strong style="font-size: 1.3em; color: #ff6b9d;">This site is yours Madam ❤️❤️💖💖<br>Welcome Madam Prince 👑</strong><br><br>💖 This site is created with love, exclusively for you! 💖<br>You deserve all the best! 👑✨<br><br>${loveEmojis}`;
        
        return message;
    }

    // Send Message
    async sendMessage() {
        const message = this.input.value.trim();

        // Check for clear chat commands (case-insensitive)
        const clearCommands = ['clear', 'clear chat', 'reset chat'];
        if (clearCommands.includes(message.toLowerCase())) {
            console.log('🗑️ Clear command detected');
            this.input.value = '';
            this.chatHistory = [];
            this.saveChatHistory();
            
            // Clear messages with confirmation
            this.messagesContainer.innerHTML = `
                <div class="message bot-message" style="animation: fadeIn 0.5s ease-in;">
                    <div class="message-content">
                        <p>✅ Chat cleared successfully! Ready to chat again?</p>
                    </div>
                    <span class="message-time">Now</span>
                </div>
            `;
            this.scrollToBottom();
            return;
        }

        // Check for love targets (special names)
        if (this.isLoveTarget(message)) {
            console.log('💖 Love target detected!');
            this.input.value = '';
            
            try {
                this.isProcessing = true;
                this.sendBtn.disabled = true;
                this.voiceInputBtn.disabled = true;

                // Add user message
                this.addMessage(message, 'user');

                // Show typing indicator
                this.showTypingIndicator(true);

                // Simulate processing
                await this.delay(1200); // Longer delay for special response

                // Hide typing indicator
                this.showTypingIndicator(false);

                // Add special love response with custom styling
                const loveMessage = this.generateLoveResponse();
                const messageDiv = document.createElement('div');
                messageDiv.className = 'message bot-message message-animate love-message';

                const contentDiv = document.createElement('div');
                contentDiv.className = 'message-content';
                contentDiv.innerHTML = `<p>${loveMessage}</p>`;

                const timeSpan = document.createElement('span');
                timeSpan.className = 'message-time';
                timeSpan.textContent = this.getCurrentTime();

                messageDiv.appendChild(contentDiv);
                messageDiv.appendChild(timeSpan);

                this.messagesContainer.appendChild(messageDiv);
                this.scrollToBottom();

                // Save to history
                this.chatHistory.push({ 
                    sender: 'bot', 
                    text: 'Special Love Message', 
                    timestamp: new Date().toISOString() 
                });
                this.saveChatHistory();

                // Trigger heart animation
                this.triggerHeartAnimation();

            } catch (error) {
                console.error('❌ Error in love response:', error);
                this.addMessage('💖 Special message for you! 💖', 'bot');
            } finally {
                this.isProcessing = false;
                this.sendBtn.disabled = false;
                this.voiceInputBtn.disabled = false;
                this.input.focus();
            }
            return;
        }

        if (!message) {
            console.warn('Empty message - ignoring');
            return;
        }

        if (this.isProcessing) {
            console.warn('Already processing - ignoring');
            return;
        }

        try {
            this.isProcessing = true;
            this.input.value = '';
            this.sendBtn.disabled = true;
            this.voiceInputBtn.disabled = true;

            console.log('📤 User message:', message);

            // Add user message
            this.addMessage(message, 'user');

            // Show typing indicator
            this.showTypingIndicator(true);

            // Detect language for response
            const detectedLanguage = this.languageAnalyzer.detectLanguage(message);
            console.log('🌍 Detected language:', detectedLanguage);

            // Get bot response
            await this.delay(600); // Simulate processing with multilingual analysis
            const response = this.generateResponse(message);

            console.log('📥 Bot response:', response.substring(0, 50) + '...');

            // Hide typing indicator
            this.showTypingIndicator(false);

            // Add bot message
            this.addMessage(response, 'bot');

            // Speak response if voice is enabled
            this.speakText(response, detectedLanguage);

            // Save chat history
            this.saveChatHistory();
        } catch (error) {
            console.error('❌ Error sending message:', error);
            this.showTypingIndicator(false);
            this.addMessage('❌ Sorry, there was an error processing your message. Please try again.', 'bot');
        } finally {
            this.isProcessing = false;
            this.sendBtn.disabled = false;
            this.voiceInputBtn.disabled = false;
            this.input.focus();
        }
    }

    // Generate Response using AI matching logic with multilingual support
    generateResponse(query) {
        try {
            const detected = this.languageAnalyzer.detectLanguage(query);
            const normalized = this.languageAnalyzer.normalize(query);

            console.log('🧠 Processing query with language:', detected);

            // Use available toolsData (prefer window.toolsData from script.js, fallback to chatbotToolsData)
            const tools = typeof window.toolsData !== 'undefined' ? window.toolsData : chatbotToolsData;

            // Greeting patterns (multilingual)
            if (this.matchesGreeting(normalized, detected)) {
                const greetings = {
                    english: '👋 Hey there! I\'m your AI Tools Assistant. You can ask me about:\n\n💻 Coding Tools • 🎬 Video Editing • 🎨 Image Generation • 📊 Presentations • 🎵 Audio/Voice • ✍️ Writing • 📢 Marketing • ⚡ Productivity\n\nOr ask me about a specific tool!',
                    hindi: '👋 नमस्ते! मैं आपका AI असिस्टेंट हूँ। आप मुझसे पूछ सकते हैं:\n\n💻 कोडिंग • 🎬 वीडियो • 🎨 इमेज • 📊 प्रेजेंटेशन • 🎵 ऑडियो • ✍️ लेखन • 📢 मार्केटिंग • ⚡ प्रोडक्टिविटी',
                    hinglish: '👋 Namaste! Main aapka AI Assistant hoon. Aap mujhse puch sakte ho:\n\n💻 Coding • 🎬 Video Editing • 🎨 Image • 📊 Presentation • 🎵 Audio • ✍️ Writing • 📢 Marketing • ⚡ Productivity\n\nYa kissi specific tool ke baare mein poocho!'
                };
                return greetings[detected] || greetings.english;
            }

            // Help patterns
            if (this.matchesHelp(normalized, detected)) {
                const helpTexts = {
                    english: '🤖 I can help you in these ways:\n\n1️⃣ ASK ABOUT CATEGORIES:\n"Best coding tools?" or "Video editing tools"\n\n2️⃣ ASK ABOUT SPECIFIC TOOLS:\n"ChatGPT kya hai?" or "What is CapCut?"\n\n3️⃣ ASK HOW TO USE:\n"ChatGPT kaise use kare?" or "How to use Midjourney?"\n\n4️⃣ SEARCH SPECIFIC TOOLS:\n"Tell me about ChatGPT"',
                    hindi: '🤖 मैं इन तरीकों से मदद कर सकता हूँ:\n\n1️⃣ CATEGORY के बारे में पूछो:\n"Best coding tools?" या "Video editing tools"\n\n2️⃣ TOOL के बारे में पूछो:\n"ChatGPT kya hai?" या "CapCut kya hai?"\n\n3️⃣ कैसे USE करें पूछो:\n"ChatGPT kaise use kare?" या "Midjourney kaise chalate hain?"\n\n4️⃣ SPECIFIC TOOL खोजो:\n"ChatGPT batao"',
                    hinglish: '🤖 Main in tareekon se madad kar sakta hoon:\n\n1️⃣ CATEGORY ke baare mein poocho\n"Best coding tools?" ya "Video editing tools"\n\n2️⃣ TOOL ke baare mein poocho\n"ChatGPT kya hai?" ya "CapCut ke baare mein"\n\n3️⃣ "HOW TO USE" poocho\n"ChatGPT kaise use kare?" ya "Midjourney kaise chalate hain?"\n\n4️⃣ SPECIFIC TOOL khojo\n"ChatGPT batao"'
                };
                return helpTexts[detected] || helpTexts.english;
            }

            // DETECT QUERY INTENT
            // 1. Check if asking about HOW TO USE
            if (this.matchesHowToIntent(normalized, detected)) {
                const toolName = this.extractToolName(query);
                if (toolName && toolDatabase[toolName.toLowerCase()]) {
                    return this.generateHowToGuide(toolDatabase[toolName.toLowerCase()], detected);
                }
            }

            // 2. Check if asking about SPECIFIC TOOL
            if (this.matchesToolInfoIntent(normalized, detected)) {
                const toolName = this.extractToolName(query);
                if (toolName && toolDatabase[toolName.toLowerCase()]) {
                    return this.generateToolInfo(toolDatabase[toolName.toLowerCase()], detected);
                }
            }

            // 3. Check if asking about CATEGORY
            const category = this.languageAnalyzer.extractCategory(query);
            
            if (category && tools[category]) {
                const hasFreeModifier = this.languageAnalyzer.hasModifier(query, 'free');
                const hasPopularModifier = this.languageAnalyzer.hasModifier(query, 'popular');

                if (hasFreeModifier) {
                    return this.findFreeTools(category, tools);
                }
                if (hasPopularModifier) {
                    return this.findPopularTools(category, tools);
                }
                return this.formatToolResponse(tools[category], detected);
            }

            // Special queries - Free tools
            if (this.languageAnalyzer.hasModifier(query, 'free')) {
                return this.findFreeTools(null, tools);
            }

            // Special queries - Popular tools
            if (this.languageAnalyzer.hasModifier(query, 'popular')) {
                return this.findPopularTools(null, tools);
            }

            // Default fallback response - ALWAYS RETURNS SOMETHING
            const fallback = {
                english: '😅 Sorry, I didn\'t quite catch that! Try asking:\n\n• "Best coding tools?"\n• "ChatGPT kya hai?"\n• "CapCut kaise use kare?"\n• "Free AI tools"\n• "Image generation tools"\n\nOr type "help" for more options!',
                hindi: '😅 मुझे समझ नहीं आया। ये पूछने की कोशिश करें:\n\n• "Best coding tools?"\n• "ChatGPT kya hai?"\n• "CapCut kaise use kare?"\n• "Free AI tools"\n• "Image generation tools"',
                hinglish: '😅 Mujhe samajh nahi aaya. Ye poocho:\n\n• "Best coding tools?"\n• "ChatGPT kya hai?"\n• "CapCut kaise use kare?"\n• "Free AI tools"\n• "Image generation tools"\n\nYa "help" likho!'
            };
            return fallback[detected] || fallback.english;
        } catch (error) {
            console.error('❌ Error generating response:', error);
            return '😅 Sorry, something went wrong. Please try again!';
        }
    }

    // DETECT INTENT: Is user asking "HOW TO USE"?
    matchesHowToIntent(normalized, language) {
        const howToPatterns = {
            en: ['how to', 'how do', 'kaise', 'steps', 'tutorial', 'guide', 'use kare', 'chalate'],
            hi: ['कैसे', 'कैसे करते', 'तरीका', 'गाइड', 'स्टेप'],
            hinglish: ['how to', 'kaise', 'steps', 'kaise use', 'kaise chalate', 'guide']
        };
        
        const patterns = howToPatterns[language] || howToPatterns.en;
        return patterns.some(p => normalized.includes(p.toLowerCase()));
    }

    // DETECT INTENT: Is user asking for TOOL INFO?
    matchesToolInfoIntent(normalized, language) {
        const toolInfoPatterns = {
            en: ['what is', 'kya hai', 'tell me', 'about', 'describe', 'info', 'meaning'],
            hi: ['क्या है', 'बताओ', 'के बारे में', 'विवरण'],
            hinglish: ['what is', 'kya hai', 'batao', 'describe', 'ke baare mein', 'tell me about']
        };
        
        const patterns = toolInfoPatterns[language] || toolInfoPatterns.en;
        return patterns.some(p => normalized.includes(p.toLowerCase()));
    }

    // EXTRACT TOOL NAME from query
    extractToolName(query) {
        const toolNames = Object.keys(toolDatabase);
        const normalized = this.languageAnalyzer.normalize(query);
        
        for (let toolName of toolNames) {
            if (normalized.includes(toolName.toLowerCase())) {
                return toolName;
            }
        }
        return null;
    }

    // GENERATE TOOL INFO RESPONSE
    generateToolInfo(tool, language = 'english') {
        const responses = {
            english: `ℹ️ **${tool.name}**\n\n📝 **What is it?**\n${tool.description}\n\n💡 **What can you use it for?**\n${tool.useCase}\n\n🔗 **Website:** ${tool.url}\n\n💡 Want to know how to use it? Ask "How to use ${tool.name}?"`,
            hindi: `ℹ️ **${tool.name}**\n\n📝 **क्या है?**\n${tool.description}\n\n💡 **इसका क्या use है?**\n${tool.useCase}\n\n🔗 **Website:** ${tool.url}\n\n💡 कैसे use करते हैं? पूछो!`,
            hinglish: `ℹ️ **${tool.name}**\n\n📝 **Yeh kya hai?**\n${tool.description}\n\n💡 **Iska use kya hai?**\n${tool.useCase}\n\n🔗 **Website:** ${tool.url}\n\n💡 Kaise use karte hain? Poocho!`
        };
        return responses[language] || responses.english;
    }

    // GENERATE HOW-TO GUIDE
    generateHowToGuide(tool, language = 'english') {
        const responses = {
            english: `📚 **How to use ${tool.name}**\n\n${tool.howTo}\n\n✅ That's it! You're ready to use ${tool.name}!\n\n🔗 Visit: ${tool.url}`,
            hindi: `📚 **${tool.name} कैसे use करते हैं**\n\n${tool.howTo}\n\n✅ बस! आप ${tool.name} use करने के लिए तैयार हैं!\n\n🔗 Visit: ${tool.url}`,
            hinglish: `📚 **${tool.name} kaise use karte hain**\n\n${tool.howTo}\n\n✅ Done! Aap ${tool.name} use karne ke liye ready ho!\n\n🔗 Visit: ${tool.url}`
        };
        return responses[language] || responses.english;
    }

    // Multilingual greeting detection
    matchesGreeting(normalized, language) {
        const greetings = {
            en: ['hi', 'hello', 'hey', 'greetings', 'hiya', 'namaste', 'salaam'],
            hi: ['नमस्ते', 'हेलो', 'हाय', 'सलाम'],
            hinglish: ['hi', 'hello', 'hey', 'namaste', 'haan', 'bahar']
        };

        const keywords = greetings[language] || greetings.en;
        return keywords.some(keyword => normalized.includes(keyword.toLowerCase()));
    }

    // Multilingual help detection
    matchesHelp(normalized, language) {
        const helpKeywords = {
            en: ['help', 'how', 'what can', 'what do', 'can you', 'suggest', 'recommend'],
            hi: ['मदद', 'कैसे', 'क्या', 'सुझाव', 'सिफारिश'],
            hinglish: ['help', 'how', 'kya', 'kaise', 'suggest', 'recommend', 'bataao']
        };

        const keywords = helpKeywords[language] || helpKeywords.en;
        return keywords.some(keyword => normalized.includes(keyword.toLowerCase()));
    }

    // Format Tool Response (Multilingual)
    formatToolResponse(category, language = 'english') {
        if (!category || !category.tools || category.tools.length === 0) {
            const noToolsMsg = {
                english: '❌ No tools found for that category.',
                hindi: '❌ उस श्रेणी के लिए कोई उपकरण नहीं मिला।',
                hinglish: '❌ Us category ke liye koi tool nahi mila.'
            };
            return noToolsMsg[language] || noToolsMsg.english;
        }

        let response = `${category.icon} **${category.name}**\n\n`;
        
        // Show top 3-5 tools
        const toolsToShow = Math.min(5, category.tools.length);
        const tools = category.tools.slice(0, toolsToShow);
        
        tools.forEach((tool, index) => {
            response += `${index + 1}. **${tool.name}** (${tool.badge})\n`;
            response += `   📝 ${tool.description}\n`;
            if (tool.url) {
                response += `   🔗 ${tool.url}\n`;
            }
            response += '\n';
        });

        const remaining = category.tools.length - toolsToShow;
        if (remaining > 0) {
            response += `📚 ... and ${remaining} more tools available in this category!`;
        }

        return response;
    }

    // Find Free Tools (with optional category filter)
    findFreeTools(category = null, tools = null) {
        if (!tools) {
            tools = typeof window.toolsData !== 'undefined' ? window.toolsData : chatbotToolsData;
        }

        let freeTools = [];

        if (category && tools[category]) {
            // Filter free tools from specific category
            if (tools[category].tools) {
                tools[category].tools.forEach(tool => {
                    if (tool.badge && tool.badge.toLowerCase() === 'free') {
                        freeTools.push({ 
                            ...tool, 
                            categoryName: tools[category].icon + ' ' + tools[category].name 
                        });
                    }
                });
            }
        } else {
            // Get all free tools from all categories
            Object.entries(tools).forEach(([catKey, catData]) => {
                if (catData.tools) {
                    catData.tools.forEach(tool => {
                        if (tool.badge && tool.badge.toLowerCase() === 'free') {
                            freeTools.push({ 
                                ...tool, 
                                categoryName: catData.icon + ' ' + catData.name 
                            });
                        }
                    });
                }
            });
        }

        if (freeTools.length === 0) {
            return "💰 No explicitly free tools found, but many tools have free tiers! Try asking about specific categories like 'coding', 'image', or 'video'.";
        }

        let response = `🎉 **Free AI Tools Available:**\n\n`;
        const toolsToShow = Math.min(5, freeTools.length);
        freeTools.slice(0, toolsToShow).forEach((tool, index) => {
            response += `${index + 1}. **${tool.name}** - ${tool.categoryName}\n`;
            response += `   📝 ${tool.description}\n`;
            if (tool.url) {
                response += `   🔗 ${tool.url}\n`;
            }
            response += '\n';
        });

        if (freeTools.length > toolsToShow) {
            response += `📚 ... and ${freeTools.length - toolsToShow} more free tools!`;
        }

        return response;
    }

    // Find Popular Tools (with optional category filter)
    findPopularTools(category = null, tools = null) {
        if (!tools) {
            tools = typeof window.toolsData !== 'undefined' ? window.toolsData : chatbotToolsData;
        }

        let popularTools = [];

        if (category && tools[category]) {
            // Filter popular tools from specific category
            if (tools[category].tools) {
                tools[category].tools.forEach(tool => {
                    if (tool.badge && tool.badge.toLowerCase() === 'popular') {
                        popularTools.push({ 
                            ...tool, 
                            categoryName: tools[category].icon + ' ' + tools[category].name 
                        });
                    }
                });
            }
        } else {
            // Get all popular tools from all categories
            Object.entries(tools).forEach(([catKey, catData]) => {
                if (catData.tools) {
                    catData.tools.forEach(tool => {
                        if (tool.badge && tool.badge.toLowerCase() === 'popular') {
                            popularTools.push({ 
                                ...tool, 
                                categoryName: catData.icon + ' ' + catData.name 
                            });
                        }
                    });
                }
            });
        }

        if (popularTools.length === 0) {
            return "⭐ No specifically marked 'popular' tools found. Try asking about a specific category like 'coding', 'image', or 'video'.";
        }

        let response = `⭐ **Most Popular & Trending AI Tools:**\n\n`;
        const toolsToShow = Math.min(5, popularTools.length);
        popularTools.slice(0, toolsToShow).forEach((tool, index) => {
            response += `${index + 1}. **${tool.name}** - ${tool.categoryName}\n`;
            response += `   📝 ${tool.description}\n`;
            if (tool.url) {
                response += `   🔗 ${tool.url}\n`;
            }
            response += '\n';
        });

        if (popularTools.length > toolsToShow) {
            response += `📚 ... and ${popularTools.length - toolsToShow} more trending tools!`;
        }

        return response;
    }

    // Get Current Time
    getCurrentTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    // Get Random Friendly Phrase
    getRandomFriendlyPhrase() {
        const phrases = [
            '🚀 Let me help you',
            '😄 Great question',
            '✨ Here\'s what I found',
            '💡 Perfect timing',
            '👍 Sure thing',
            '🎯 Found it for you',
            '⚡ Quick answer'
        ];
        return phrases[Math.floor(Math.random() * phrases.length)];
    }

    // Get Context-Based Emoji
    getContextEmoji(text) {
        const lowerText = text.toLowerCase();
        
        // Coding related
        if (lowerText.includes('coding') || lowerText.includes('code') || lowerText.includes('python') || 
            lowerText.includes('javascript') || lowerText.includes('copilot') || lowerText.includes('codeium') ||
            lowerText.includes('chatgpt')) {
            return '💻 ';
        }
        
        // Video related
        if (lowerText.includes('video') || lowerText.includes('capcut') || lowerText.includes('premiere') ||
            lowerText.includes('editing') || lowerText.includes('filmora') || lowerText.includes('runway')) {
            return '🎬 ';
        }
        
        // Image related
        if (lowerText.includes('image') || lowerText.includes('midjourney') || lowerText.includes('dall-e') ||
            lowerText.includes('leonardo') || lowerText.includes('photoshop') || lowerText.includes('generation')) {
            return '🖼️ ';
        }
        
        // Audio/Voice related
        if (lowerText.includes('audio') || lowerText.includes('voice') || lowerText.includes('music') ||
            lowerText.includes('elevenlabs') || lowerText.includes('tts') || lowerText.includes('speech')) {
            return '🎵 ';
        }
        
        // Writing/Content related
        if (lowerText.includes('writing') || lowerText.includes('grammar') || lowerText.includes('copywriter') ||
            lowerText.includes('content') || lowerText.includes('blog')) {
            return '✍️ ';
        }
        
        // Presentation/Design related
        if (lowerText.includes('presentation') || lowerText.includes('slide') || lowerText.includes('design') ||
            lowerText.includes('beautiful') || lowerText.includes('gamma') || lowerText.includes('deck')) {
            return '📊 ';
        }
        
        // Success indicators
        if (lowerText.includes('success') || lowerText.includes('successfully') || lowerText.includes('complete')) {
            return '✅ ';
        }
        
        // Error indicators
        if (lowerText.includes('error') || lowerText.includes('failed') || lowerText.includes('issue') ||
            lowerText.includes('problem')) {
            return '⚠️ ';
        }
        
        // Help/Question indicators
        if (lowerText.includes('help') || lowerText.includes('guide') || lowerText.includes('tutorial')) {
            return '📚 ';
        }
        
        // Default - conversation indicator
        return '💬 ';
    }

    // Apply Typewriter Effect to Bot Messages
    async applyTypewriterEffect(element, text, speed = 15) {
        const paragraph = element.querySelector('p');
        if (!paragraph) return;
        
        // Clear the paragraph and set it to empty
        paragraph.innerHTML = '';
        
        // Get formatted text
        const formattedText = this.formatMessageText(text);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = formattedText;
        
        // Extract plain text for typewriter effect
        const plainText = tempDiv.textContent;
        
        // Apply typewriter animation
        paragraph.textContent = '';
        for (let i = 0; i < plainText.length; i++) {
            paragraph.textContent += plainText[i];
            await this.delay(speed);
        }
        
        // Then apply formatted version
        paragraph.innerHTML = formattedText;
    }

    // Add Message to UI
    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message message-animate`;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.innerHTML = `<p>${this.formatMessageText(text)}</p>`;

        const timeSpan = document.createElement('span');
        timeSpan.className = 'message-time';
        timeSpan.textContent = this.getCurrentTime();

        messageDiv.appendChild(contentDiv);
        messageDiv.appendChild(timeSpan);

        this.messagesContainer.appendChild(messageDiv);

        // Apply enhancements for bot messages
        if (sender === 'bot') {
            // Add emoji prefix based on context
            const emoji = this.getContextEmoji(text);
            const enhancedText = emoji + text;
            
            // Apply typewriter effect asynchronously
            this.applyTypewriterEffect(contentDiv, enhancedText, 12);
        }

        this.scrollToBottom();

        // Save to history
        this.chatHistory.push({ sender, text, timestamp: new Date().toISOString() });
    }

    // Format message text (basic markdown support)
    formatMessageText(text) {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/^\* /gm, '• ')
            .replace(/\n/g, '<br>');
    }

    // Show/Hide Typing Indicator
    showTypingIndicator(show) {
        this.typingIndicator.style.display = show ? 'flex' : 'none';
        if (show) {
            this.scrollToBottom();
        }
    }

    // Scroll to Bottom
    scrollToBottom() {
        setTimeout(() => {
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        }, 0);
    }

    // Trigger Floating Hearts Animation
    triggerHeartAnimation() {
        const hearts = ['💖', '❤️', '💕', '💞', '💑', '👑', '✨'];
        const container = this.messagesContainer;
        
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (2 + Math.random() * 1.5) + 's';
            heart.style.animationDelay = (Math.random() * 0.5) + 's';
            
            container.appendChild(heart);
            
            // Remove heart after animation completes
            setTimeout(() => {
                heart.remove();
            }, 4000);
        }
    }

    // Get Multilingual Message
    getMultilingualMessage(key) {
        const messages = {
            welcome: {
                english: '👋 Hi! I\'m your AI Assistant. Ask me about video editing, coding, image generation, presentations, audio, writing, marketing, or productivity tools in English, Hindi, or Hinglish!',
                hindi: '👋 नमस्ते! मैं आपका AI सहायक हूं। मुझसे वीडियो संपादन, कोडिंग, इमेज जनरेशन, प्रस्तुति, ऑडियो, लेखन, मार्केटिंग, या उत्पादकता उपकरणों के बारे में पूछें!',
                hinglish: '👋 Namaste! Main aapka AI Assistant hoon. Mujhe ask karo video editing, coding, image generation, presentations, audio, writing, marketing, ya productivity tools ke baare mein!'
            }
        };
        return messages[key] || messages.welcome.english;
    }

    // Update initial welcome message dynamically
    updateWelcomeMessage() {
        const welcomeMsg = this.messagesContainer.querySelector('.bot-message');
        if (welcomeMsg) {
            const detectedLang = this.languageAnalyzer.detectLanguage(document.body.textContent);
            const welcomeText = this.getMultilingualMessage('welcome')[detectedLang] || this.getMultilingualMessage('welcome').english;
            welcomeMsg.querySelector('.message-content p').textContent = welcomeText;
        }
    }

    // Delay Helper
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Chat History Management
    saveChatHistory() {
        localStorage.setItem('chatbot_history', JSON.stringify(this.chatHistory));
    }

    loadChatHistory() {
        const saved = localStorage.getItem('chatbot_history');
        return saved ? JSON.parse(saved) : [];
    }

    renderChatHistory() {
        this.chatHistory.forEach(msg => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${msg.sender}-message`;

            const contentDiv = document.createElement('div');
            contentDiv.className = 'message-content';
            contentDiv.innerHTML = `<p>${this.formatMessageText(msg.text)}</p>`;

            const timeSpan = document.createElement('span');
            timeSpan.className = 'message-time';
            const msgDate = new Date(msg.timestamp);
            timeSpan.textContent = msgDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

            messageDiv.appendChild(contentDiv);
            messageDiv.appendChild(timeSpan);

            this.messagesContainer.appendChild(messageDiv);
        });
        this.scrollToBottom();
    }
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Initializing Chatbot');
    
    // Make sure toolsData is available (from script.js)
    if (typeof toolsData !== 'undefined') {
        try {
            window.chatbot = new AIAssistantChatbot();
            console.log('✅ Chatbot initialized successfully');
            console.log('Available categories:', Object.keys(toolsData).join(', '));
        } catch (error) {
            console.error('❌ Error initializing chatbot:', error);
        }
    } else {
        console.error('❌ toolsData not found. Make sure script.js is loaded before chatbot.js');
    }
});

// Fallback initialization if DOM is already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    console.log('Document already loaded - Initializing Chatbot');
    if (typeof toolsData !== 'undefined') {
        try {
            window.chatbot = new AIAssistantChatbot();
            console.log('✅ Chatbot initialized successfully (fallback)');
        } catch (error) {
            console.error('❌ Error initializing chatbot (fallback):', error);
        }
    }
}
