// ===== COMPREHENSIVE AI TOOLS DATABASE (10 CATEGORIES) =====
console.log("📁 DEBUG: script.js file loaded successfully!");

const toolsData = {
    // 1. CODING AI TOOLS
    coding: {
        name: "Coding AI Tools",
        icon: "💻",
        tools: [
            { name: "ChatGPT", url: "https://chatgpt.com/", description: "AI assistant for code generation, debugging, and explanation", badge: "🔥 Trending" },
            { name: "GitHub Copilot", url: "https://github.com/features/copilot", description: "AI pair programmer that suggests code in real-time", badge: "⭐ Popular" },
            { name: "Codeium", url: "https://codeium.com", description: "Free AI code completion for all languages", badge: "🆓 Free" },
            { name: "TabNine", url: "https://www.tabnine.com", description: "AI code completion powered by deep learning", badge: "🆓 Free" },
            { name: "Amazon CodeWhisperer", url: "https://aws.amazon.com/codewhisperer/", description: "ML-powered code suggestion service by AWS", badge: "🆓 Free" },
            { name: "Replit GhostWriter", url: "https://replit.com", description: "AI code assistant integrated into Replit IDE", badge: "🆓 Free" },
            { name: "Copilot X", url: "https://github.com/features/copilot", description: "Next-gen AI coding with chat and terminal", badge: "⭐ Popular" },
            { name: "Cursor", url: "https://www.cursor.com", description: "AI-first code editor with intelligent completions", badge: "✨ New" },
            { name: "Claude 2 (API)", url: "https://www.anthropic.com", description: "Advanced AI model for complex coding tasks", badge: "⭐ Popular" },
            { name: "Phind", url: "https://www.phind.com", description: "AI search engine optimized for developers", badge: "🆓 Free" },
            { name: "Blackbox AI", url: "https://www.blackbox.ai", description: "Fast AI code generation without limits", badge: "🆓 Free" },
            { name: "CodeWanderer", url: "https://www.codewanderer.ai", description: "AI-powered code review and refactoring", badge: "✨ New" }
        ]
    },

    // 2. VIDEO EDITING AI TOOLS
    video: {
        name: "Video Editing AI Tools",
        icon: "🎬",
        tools: [
            { name: "CapCut AI", url: "https://www.capcut.com", description: "Free AI-powered video editor with auto captions", badge: "🆓 Free" },
            { name: "Runway ML", url: "https://runwayml.com", description: "AI magic tools for video, image, and music generation", badge: "⭐ Popular" },
            { name: "Pictory AI", url: "https://pictory.ai", description: "Convert long-form content into short videos", badge: "✨ New" },
            { name: "Synthesia", url: "https://www.synthesia.io", description: "Create AI avatar videos from text in multiple languages", badge: "⭐ Popular" },
            { name: "Descript", url: "https://www.descript.com", description: "Video and podcast editor with transcription", badge: "🆓 Free" },
            { name: "Opus Clip", url: "https://www.opus.pro", description: "Auto-generate short viral video clips", badge: "🔥 Trending" },
            { name: "HeyGen", url: "https://www.heygen.com", description: "Create personalized video with AI avatars", badge: "⭐ Popular" },
            { name: "Invideo AI", url: "https://invideo.io", description: "AI video creator for marketing and social content", badge: "✨ New" },
            { name: "Movavi", url: "https://www.movavi.com", description: "Easy video editing with AI-powered features", badge: "🆓 Free" },
            { name: "Adobe Premiere Pro (AI)", url: "https://www.adobe.com", description: "Professional video editing with Generative Fill", badge: "⭐ Popular" },
            { name: "DaVinci Resolve", url: "https://www.blackmagicdesign.com", description: "Professional NLE with free AI-powered features", badge: "🆓 Free" },
            { name: "Vimeo AI Tools", url: "https://vimeo.com", description: "Powerful video platform with AI editing suite", badge: "⭐ Popular" }
        ]
    },

    // 3. IMAGE EDITING AI TOOLS
    imageEditing: {
        name: "Image Editing AI Tools",
        icon: "🖼️",
        tools: [
            { name: "Adobe Photoshop (Generative Fill)", url: "https://www.adobe.com/products/photoshop", description: "Professional image editing with AI abilities", badge: "⭐ Popular" },
            { name: "Photoshop Express", url: "https://www.adobe.com/products/photoshopexpress", description: "Free mobile image editor with AI enhancement", badge: "🆓 Free" },
            { name: "Canva Pro", url: "https://www.canva.com", description: "Design tool with AI image enhancement and editing", badge: "🔥 Trending" },
            { name: "Remove.bg", url: "https://www.remove.bg", description: "Automatic background removal powered by AI", badge: "🆓 Free" },
            { name: "Cleanup.pictures", url: "https://cleanup.pictures", description: "Remove unwanted objects from photos with AI", badge: "🆓 Free" },
            { name: "Upscayl", url: "https://upscayl.github.io", description: "Free open-source image upscaler with AI", badge: "🆓 Free" },
            { name: "Topaz Gigapixel AI", url: "https://www.topazlabs.com", description: "Professional AI image upscaling software", badge: "⭐ Popular" },
            { name: "Clipdrop", url: "https://clipdrop.co", description: "AI-powered image editing suite in your browser", badge: "✨ New" },
            { name: "Imgupscaler", url: "https://imgupscaler.com", description: "Fast online image upscaler using AI", badge: "🆓 Free" },
            { name: "Icons8 Upscaler", url: "https://icons8.com/upscaler", description: "AI-powered image upscaling service", badge: "✨ New" }
        ]
    },

    // 4. VIDEO GENERATION AI TOOLS
    videoGen: {
        name: "Video Generation AI Tools",
        icon: "🎥",
        tools: [
            { name: "Runway ML", url: "https://runwayml.com", description: "Generate videos from text prompts", badge: "🔥 Trending" },
            { name: "Synthesia", url: "https://www.synthesia.io", description: "Create AI avatar videos from text", badge: "⭐ Popular" },
            { name: "D-ID", url: "https://www.d-id.com", description: "Generate lively talking avatar videos", badge: "✨ New" },
            { name: "Pika Labs", url: "https://pika.art", description: "AI video generation and editing platform", badge: "🔥 Trending" },
            { name: "Steve AI", url: "https://www.steve.ai", description: "Create videos from text automatically", badge: "🆓 Free" },
            { name: "Animaker", url: "https://www.animaker.com", description: "Animated video creator with AI tools", badge: "⭐ Popular" },
            { name: "Powtoon", url: "https://www.powtoon.com", description: "Create animated videos and presentations", badge: "🆓 Free" },
            { name: "Xtreme Lashes", url: "https://www.xtremelashes.com", description: "AI-powered video enhancement platform", badge: "✨ New" },
            { name: "FlexClip", url: "https://www.flexclip.com", description: "Simple video maker with AI music and transitions", badge: "🆓 Free" },
            { name: "Colossyan", url: "https://www.colossyan.com", description: "Generate personalized videos with AI actors", badge: "⭐ Popular" }
        ]
    },

    // 5. PPT/PRESENTATION AI TOOLS
    ppt: {
        name: "PPT/Presentation AI Tools",
        icon: "📊",
        tools: [
            { name: "Beautiful.ai", url: "https://www.beautiful.ai", description: "AI design assistant for beautiful presentations", badge: "⭐ Popular" },
            { name: "Tome", url: "https://tome.app", description: "AI-powered storytelling for presentations", badge: "🔥 Trending" },
            { name: "Gamma AI", url: "https://gamma.app", description: "Create presentations, documents, and webpages", badge: "⭐ Popular" },
            { name: "Decktopus", url: "https://www.decktopus.com", description: "AI slideshow creator with templates", badge: "🆓 Free" },
            { name: "Slidesai.io", url: "https://www.slidesai.io", description: "Turn text documents into presentations", badge: "🆓 Free" },
            { name: "Presentations.ai", url: "https://presentations.ai", description: "Auto-generate PowerPoint presentations", badge: "✨ New" },
            { name: "Microsoft Designer", url: "https://designer.microsoft.com", description: "AI-powered design for presentations", badge: "🆓 Free" },
            { name: "Mentimeter", url: "https://www.mentimeter.com", description: "Interactive presentations with AI insights", badge: "⭐ Popular" },
            { name: "Prezi", url: "https://prezi.com", description: "Non-linear presentations with AI suggestions", badge: "✨ New" },
            { name: "Deckdeckgo", url: "https://deckdeckgo.com", description: "Web-based presentations with AI features", badge: "🆓 Free" }
        ]
    },

    // 6. IMAGE/PHOTO GENERATION AI TOOLS
    image: {
        name: "Image/Photo Generation AI Tools",
        icon: "🎨",
        tools: [
            { name: "DALL·E 3", url: "https://openai.com/dall-e-3", description: "OpenAI's text-to-image generation with high quality", badge: "🔥 Trending" },
            { name: "Midjourney", url: "https://www.midjourney.com", description: "Premium AI image generation with artistic quality", badge: "⭐ Popular" },
            { name: "Leonardo AI", url: "https://leonardo.ai", description: "AI image generation with real-time capabilities", badge: "🆓 Free" },
            { name: "Stable Diffusion", url: "https://stablediffusion.com", description: "Open-source text-to-image model", badge: "🆓 Free" },
            { name: "Adobe Firefly", url: "https://www.adobe.com/products/firefly", description: "AI generative for images, vectors, and designs", badge: "🆓 Free" },
            { name: "Bing Image Creator", url: "https://www.bing.com/images/create", description: "DALL·E powered by Microsoft", badge: "🆓 Free" },
            { name: "Hugging Face", url: "https://huggingface.co", description: "Open-source image generation models", badge: "🆓 Free" },
            { name: "Civitai", url: "https://civitai.com", description: "Community-driven AI image generation platform", badge: "🆓 Free" },
            { name: "PlaygroundAI", url: "https://playgroundai.com", description: "Free AI image generation with community models", badge: "🆓 Free" },
            { name: "NightCafe", url: "https://creator.nightcafe.studio", description: "AI art generator with 20+ different algorithms", badge: "✨ New" },
            { name: "Artbreeder", url: "https://www.artbreeder.com", description: "Create and remix AI-generated art", badge: "🆓 Free" },
            { name: "DeepDream", url: "https://deepdreamgenerator.com", description: "Artistic AI image generation and enhancement", badge: "🆓 Free" }
        ]
    },

    // 7. WRITING/CONTENT AI TOOLS
    writing: {
        name: "Writing/Content AI Tools",
        icon: "✍️",
        tools: [
            { name: "ChatGPT", url: "https://chatgpt.com/", description: "Advanced AI for writing and content creation", badge: "🔥 Trending" },
            { name: "Jasper", url: "https://www.jasper.ai", description: "AI copywriting assistant for marketing content", badge: "⭐ Popular" },
            { name: "Copy.ai", url: "https://www.copy.ai", description: "AI content generator for ads and blogs", badge: "⭐ Popular" },
            { name: "Grammarly", url: "https://www.grammarly.com", description: "AI writing assistant for tone and clarity", badge: "⭐ Popular" },
            { name: "Quillbot", url: "https://quillbot.com", description: "AI paraphraser and writing improvement tool", badge: "🆓 Free" },
            { name: "Writesonic", url: "https://writesonic.com", description: "AI content writer for blogs and emails", badge: "🆓 Free" },
            { name: "Anyword", url: "https://anyword.com", description: "Predictive AI copywriting for conversions", badge: "⭐ Popular" },
            { name: "Sudowrite", url: "https://www.sudowrite.ai", description: "AI writing assistant for creative and technical writing", badge: "✨ New" },
            { name: "Copy Smith", url: "https://www.copysmith.ai", description: "AI product description and content generator", badge: "🆓 Free" },
            { name: "GetResponse AI", url: "https://www.getresponse.com", description: "Email marketing with AI content generation", badge: "✨ New" },
            { name: "MarketingBlocks AI", url: "https://marketingblocks.ai", description: "All-in-one AI marketing content creator", badge: "🔥 Trending" },
            { name: "Typeform AI", url: "https://www.typeform.com", description: "AI-powered form and survey creation", badge: "✨ New" }
        ]
    },

    // 8. MUSIC/AUDIO AI TOOLS
    audio: {
        name: "Music/Audio AI Tools",
        icon: "🎵",
        tools: [
            { name: "Elevenlabs", url: "https://elevenlabs.io", description: "Premium AI text-to-speech with natural voices", badge: "⭐ Popular" },
            { name: "Descript", url: "https://www.descript.com", description: "Record, edit, and transcribe audio and video", badge: "⭐ Popular" },
            { name: "Murf AI", url: "https://murf.ai", description: "AI voice generator for podcasts and videos", badge: "🆓 Free" },
            { name: "Google NotebookLM", url: "https://notebooklm.google", description: "Create AI-generated audio from documents", badge: "✨ New" },
            { name: "Voice.ai", url: "https://voice.ai", description: "Real-time voice changer and text-to-speech", badge: "🆓 Free" },
            { name: "Synthesia", url: "https://www.synthesia.io", description: "AI videos with natural-sounding voices", badge: "⭐ Popular" },
            { name: "Loudly", url: "https://www.loudly.com", description: "AI music generation for creators and businesses", badge: "🆓 Free" },
            { name: "Amper Music", url: "https://www.ampermusic.com", description: "AI-generated music for videos and projects", badge: "✨ New" },
            { name: "MuseNet", url: "https://openai.com", description: "OpenAI's music generation model", badge: "🆓 Free" },
            { name: "Jukebox", url: "https://openai.com/research/jukebox", description: "AI music generation with style control", badge: "🆓 Free" },
            { name: "Adobe Podcast", url: "https://podcast.adobe.com", description: "Free AI audio recording and editing", badge: "🆓 Free" },
            { name: "Listnr", url: "https://www.listnr.tech", description: "AI voice generation and podcast creation", badge: "✨ New" }
        ]
    },

    // 9. BUSINESS/MARKETING AI TOOLS
    marketing: {
        name: "Business/Marketing AI Tools",
        icon: "📢",
        tools: [
            { name: "HubSpot", url: "https://www.hubspot.com", description: "AI CRM and marketing automation platform", badge: "⭐ Popular" },
            { name: "Persado", url: "https://www.persado.com", description: "AI language generation for marketing campaigns", badge: "⭐ Popular" },
            { name: "Seventh Sense", url: "https://www.seventhsense.io", description: "AI email send time optimization", badge: "🆓 Free" },
            { name: "Phrasee", url: "https://www.phrasee.co", description: "AI copywriting for emails and ads", badge: "✨ New" },
            { name: "Optimizely", url: "https://www.optimizely.com", description: "AI experimentation and personalization", badge: "⭐ Popular" },
            { name: "Conversion.ai", url: "https://www.conversion.ai", description: "AI marketing content creator platform", badge: "🆓 Free" },
            { name: "Klaviyo", url: "https://www.klaviyo.com", description: "AI-driven email marketing platform", badge: "⭐ Popular" },
            { name: "Retargeting.biz", url: "https://retargeting.biz", description: "AI-powered advertising and retargeting", badge: "✨ New" },
            { name: "Adcreative.ai", url: "https://www.adcreative.ai", description: "AI ad creative generator for campaigns", badge: "🔥 Trending" },
            { name: "MarketingBlocks", url: "https://marketingblocks.ai", description: "All-in-one AI marketing suite", badge: "✨ New" },
            { name: "Outbound", url: "https://www.outbound.ai", description: "AI sales and marketing automation", badge: "🔥 Trending" }
        ]
    },

    // 10. STUDY/EDUCATION AI TOOLS
    education: {
        name: "Study/Education AI Tools",
        icon: "🎓",
        tools: [
            { name: "ChatGPT", url: "https://chatgpt.com/", description: "AI tutor for explaining concepts and homework help", badge: "🆓 Free" },
            { name: "Wolfram Alpha", url: "https://www.wolframalpha.com", description: "Computational knowledge engine for math and science", badge: "🆓 Free" },
            { name: "Khan Academy", url: "https://www.khanacademy.org", description: "Free learning with AI-powered personalization", badge: "🆓 Free" },
            { name: "Duolingo", url: "https://www.duolingo.com", description: "AI-powered language learning app", badge: "🆓 Free" },
            { name: "Coursera", url: "https://www.coursera.org", description: "Online courses with AI learning recommendations", badge: "🆓 Free" },
            { name: "Udacity", url: "https://www.udacity.com", description: "Tech education with personalized learning paths", badge: "✨ New" },
            { name: "Snap Homework", url: "https://www.snaphomework.com", description: "AI homework help and problem solver", badge: "✨ New" },
            { name: "Wolfram Student", url: "https://www.wolfram.com/student", description: "AI assistant for students across subjects", badge: "⭐ Popular" },
            { name: "Chegg AI", url: "https://www.chegg.com", description: "AI-assisted homework help service", badge: "⭐ Popular" },
            { name: "Studyblue", url: "https://www.studyblue.com", description: "AI flashcard and study guide generator", badge: "🆓 Free" },
            { name: "Gradescope", url: "https://www.gradescope.com", description: "AI-powered assignment grading and analytics", badge: "✨ New" },
            { name: "Smart Tutor", url: "https://www.smarttutor.ai", description: "Personalized AI tutoring across subjects", badge: "🔥 Trending" }
        ]
    },

    // 11. PRODUCTIVITY AI TOOLS
    productivity: {
        name: "Productivity AI Tools",
        icon: "⚡",
        tools: [
            { name: "Notion AI", url: "https://www.notion.so", description: "AI writing assistant in workspace", badge: "⭐ Popular" },
            { name: "Microsoft Copilot", url: "https://copilot.microsoft.com", description: "AI in Microsoft Office products", badge: "⭐ Popular" },
            { name: "Zapier", url: "https://zapier.com", description: "Workflow automation with AI", badge: "⭐ Popular" },
            { name: "Taskade AI", url: "https://www.taskade.com", description: "AI task management and automation", badge: "🆓 Free" },
            { name: "Calendly", url: "https://calendly.com", description: "AI scheduling assistant", badge: "🆓 Free" },
            { name: "Otter.ai", url: "https://otter.ai", description: "AI meeting assistant with transcription", badge: "⭐ Popular" },
            { name: "Mem", url: "https://mem.ai", description: "AI-powered personal knowledge base", badge: "✨ New" },
            { name: "Copilot Hub", url: "https://copilothub.co", description: "Manage and deploy AI assistants", badge: "✨ New" },
            { name: "Reclaim.ai", url: "https://reclaim.ai", description: "AI assistant for smart time management", badge: "🔥 Trending" },
            { name: "Read.ai", url: "https://read.ai", description: "AI meeting recorder and note-taker", badge: "✨ New" }
        ]
    }
};

// ===== TRENDING TOOLS (Popular ones from various categories) =====
const trendingTools = [
    { ...toolsData.coding.tools[0], category: "coding" },           // ChatGPT
    { ...toolsData.image.tools[0], category: "image" },             // DALL·E 3
    { ...toolsData.videoGen.tools[0], category: "videoGen" },       // Runway ML
    { ...toolsData.ppt.tools[1], category: "ppt" },                 // Tome
    { ...toolsData.video.tools[5], category: "video" },             // Opus Clip
    { ...toolsData.writing.tools[7], category: "writing" },         // Sudowrite
    { ...toolsData.marketing.tools[8], category: "marketing" },     // Adcreative.ai
    { ...toolsData.education.tools[11], category: "education" },    // Smart Tutor
    { ...toolsData.audio.tools[6], category: "audio" },             // Loudly
    { ...toolsData.imageEditing.tools[3], category: "imageEditing" } // Remove.bg
];

// ===== FAVORITES MANAGEMENT =====
class FavoritesManager {
    constructor() {
        this.storageKey = 'aiToolsFavorites';
        this.favorites = this.loadFavorites();
    }

    loadFavorites() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : [];
    }

    saveFavorites() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.favorites));
    }

    addFavorite(toolName, category) {
        const id = `${category}-${toolName}`;
        if (!this.favorites.includes(id)) {
            this.favorites.push(id);
            this.saveFavorites();
            return true;
        }
        return false;
    }

    removeFavorite(toolName, category) {
        const id = `${category}-${toolName}`;
        this.favorites = this.favorites.filter(fav => fav !== id);
        this.saveFavorites();
        return true;
    }

    isFavorite(toolName, category) {
        const id = `${category}-${toolName}`;
        return this.favorites.includes(id);
    }

    getFavoriteTools() {
        const favorites = [];
        Object.entries(toolsData).forEach(([category, data]) => {
            data.tools.forEach(tool => {
                if (this.isFavorite(tool.name, category)) {
                    favorites.push({ ...tool, category });
                }
            });
        });
        return favorites;
    }
}

const favManager = new FavoritesManager();

// ===== TOOL INTERACTION FUNCTIONS =====

// Open tool in new tab
function openToolInNewTab(url) {
    console.log(`🔗 DEBUG: Opening tool URL in new tab: ${url}`);
    window.open(url, '_blank');
}

// ===== TOOL SORTING & RANKING =====
// Sort tools by priority badge (Top/Trending first, Popular second, Free/New last)
function sortToolsByPriority(tools) {
    const priorityMap = {
        'Trending': 1,  // Highest priority - Top tools
        'Top': 1,
        'Popular': 2,   // Popular tools
        'Free': 3,      // Free tools
        'New': 4        // New tools
    };
    
    // Create a copy to avoid modifying original array
    return [...tools].sort((a, b) => {
        let priorityA = 5; // Default priority
        let priorityB = 5;
        
        // Find priority based on badge content
        for (const [key, priority] of Object.entries(priorityMap)) {
            if (a.badge.includes(key)) priorityA = priority;
            if (b.badge.includes(key)) priorityB = priority;
        }
        
        return priorityA - priorityB;
    });
}

// ===== UI FUNCTIONS =====

// Initialize the app
function init() {
    console.log("🚀 DEBUG: init() function called - Page loading started!");
    console.log("📊 DEBUG: toolsData available:", Object.keys(toolsData).length, "categories");
    
    renderCategories();
    renderTrendingTools();
    setupEventListeners();
    loadDarkMode();
    
    console.log("✅ DEBUG: init() completed - All systems initialized!");
}

// Render all categories
function renderCategories() {
    console.log("🔍 DEBUG: renderCategories() called");
    const categoriesContainer = document.querySelector('.categories');
    
    if (!categoriesContainer) {
        console.error("❌ ERROR: .categories container not found in DOM!");
        return;
    }
    
    console.log("✅ DEBUG: Found .categories container", categoriesContainer);
    categoriesContainer.innerHTML = '';

    const categoryKeys = Object.keys(toolsData);
    console.log("📊 DEBUG: Found categories:", categoryKeys);
    
    categoryKeys.forEach((key, index) => {
        const data = toolsData[key];
        const card = document.createElement('div');
        card.className = 'card';
        card.id = `category-${key}`;  // Add unique ID for each card
        if (index === 0) card.classList.add('active-card');
        card.innerHTML = `
            <span class="category-icon">${data.icon}</span>
            <span>${data.name}</span>
        `;
        
        // Method 1: addEventListener (Primary)
        card.addEventListener('click', () => {
            console.log(`🎯 DEBUG: Category "${key}" clicked via addEventListener!`);
            showCategory(key, card);
        });
        
        // Method 2: Direct onclick as fallback
        card.onclick = (e) => {
            console.log(`🎯 DEBUG: Category "${key}" clicked via onclick fallback!`);
            showCategory(key, card);
        };
        
        categoriesContainer.appendChild(card);
        console.log(`✅ DEBUG: Added category card for "${key}" (ID: category-${key})`);
    });

    console.log("✅ DEBUG: All categories rendered successfully");
    
    // Show first category by default
    const firstCategory = Object.keys(toolsData)[0];
    console.log(`⚙️ DEBUG: Loading first category: "${firstCategory}"`);
    renderTools(firstCategory);
}

// Show specific category tools
function showCategory(categoryKey, cardElement) {
    console.log(`🎯 DEBUG: showCategory() called with key: "${categoryKey}"`);
    
    // Update active card
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('active-card');
    });
    cardElement.classList.add('active-card');
    console.log(`✅ DEBUG: Updated active card styling`);

    // Render tools
    console.log(`⚙️ DEBUG: Calling renderTools() for "${categoryKey}"`);
    renderTools(categoryKey);
}

// Render tools for a category
function renderTools(categoryKey) {
    console.log(`📋 DEBUG: renderTools() called for category: "${categoryKey}"`);
    
    const toolsSection = document.getElementById('tools-section');
    if (!toolsSection) {
        console.error("❌ ERROR: #tools-section container not found!");
        return;
    }
    console.log("✅ DEBUG: Found #tools-section container", toolsSection);
    
    const category = toolsData[categoryKey];
    if (!category) {
        console.error(`❌ ERROR: Category "${categoryKey}" not found in toolsData!`);
        return;
    }
    console.log(`✅ DEBUG: Found category data for "${categoryKey}":`, category);

    // Sort tools by priority (Top first, Popular second, Free/New last)
    const sortedTools = sortToolsByPriority(category.tools);
    console.log(`📊 DEBUG: Sorted ${sortedTools.length} tools for display`);

    const toolsHTML = sortedTools.map(tool => {
        const isFav = favManager.isFavorite(tool.name, categoryKey);
        // Determine badge class based on content
        let badgeClass = 'popular';
        if (tool.badge.includes('Free')) badgeClass = 'free';
        else if (tool.badge.includes('New')) badgeClass = 'new';
        else if (tool.badge.includes('Trending')) badgeClass = 'trending';
        
        return `
            <div class="tool-card">
                <div class="tool-header">
                    <h3>${tool.name}</h3>
                    <div class="tool-actions">
                        <button class="favorite-btn ${isFav ? 'active' : ''}" 
                                onclick="toggleFavorite('${tool.name.replace(/'/g, "\\'")}', '${categoryKey}')"
                                title="Add to favorites">
                            ❤️
                        </button>
                    </div>
                </div>
                <p class="tool-description">${tool.description}</p>
                <div class="tool-footer">
                    <div class="badge-container">
                        <span class="badge ${badgeClass}">${tool.badge}</span>
                    </div>
                    <button class="tool-link" onclick="openToolInNewTab('${tool.url.replace(/'/g, "\\'")}')" title="Open ${tool.name}">Use Tool →</button>
                </div>
            </div>
        `;
    }).join('');

    toolsSection.innerHTML = `
        <div class="tools-container">
            <h2>${category.icon} ${category.name}</h2>
            <div class="tools-grid">
                ${toolsHTML}
            </div>
        </div>
    `;
    console.log(`✅ DEBUG: Successfully rendered ${sortedTools.length} tools in #tools-section`);
}

// Toggle favorite
function toggleFavorite(toolName, category) {
    if (favManager.isFavorite(toolName, category)) {
        favManager.removeFavorite(toolName, category);
    } else {
        favManager.addFavorite(toolName, category);
    }
    
    // Re-render current view
    const activeCard = document.querySelector('.card.active-card');
    if (activeCard) {
        // Get the category key from the current view
        let currentCategory = null;
        Object.keys(toolsData).forEach(key => {
            const categoryName = toolsData[key].name;
            if (activeCard.textContent.includes(categoryName)) {
                currentCategory = key;
            }
        });
        
        if (currentCategory) {
            renderTools(currentCategory);
        }
    }
    updateFavoritesButton();
}

// Show favorites in modal
function showFavorites() {
    const favorites = favManager.getFavoriteTools();
    const favModal = document.getElementById('favoritesModalOverlay');
    const favListContainer = document.getElementById('favoritesListContainer');
    const favModalTitle = document.getElementById('favoritesModalTitle');

    if (!favModal || !favListContainer) {
        console.error('❌ Favorites modal elements not found in DOM');
        return;
    }

    // Update title with count
    favModalTitle.textContent = `❤️ My Favorites${favorites.length > 0 ? ` (${favorites.length})` : ''}`;

    if (favorites.length === 0) {
        favListContainer.innerHTML = '<div class="no-favorites-msg"><p>❤️ No favorites yet!</p><p style="font-size: 0.95rem; opacity: 0.6;">Click the heart icon on any tool to add it to your favorites.</p></div>';
        favModal.classList.add('active');
        return;
    }

    // Generate favorite items
    const favItemsHTML = favorites.map(tool => `
        <div class="favorite-item">
            <h3 class="favorite-item-name">${tool.name}</h3>
            <div class="favorite-item-actions">
                <button class="favorite-open-btn" 
                        onclick="openToolInNewTab('${tool.url.replace(/'/g, "\\'")}')"
                        title="Open ${tool.name}">
                    🔗 Open
                </button>
                <button class="favorite-remove-btn" 
                        onclick="removeFavoriteFromModal('${tool.name.replace(/'/g, "\\'")}', '${tool.category}')"
                        title="Remove from favorites">
                    ❌ Remove
                </button>
            </div>
        </div>
    `).join('');

    favListContainer.innerHTML = favItemsHTML;
    
    // Show modal with smooth animation
    favModal.classList.add('active');
    console.log(`✅ Favorites modal opened with ${favorites.length} items`);
}

// Close favorites modal
function closeFavoritesModal() {
    const favModal = document.getElementById('favoritesModalOverlay');
    if (favModal) {
        favModal.classList.remove('active');
        console.log('✅ Favorites modal closed');
    }
}

// Remove favorite from modal and refresh
function removeFavoriteFromModal(toolName, category) {
    favManager.removeFavorite(toolName, category);
    updateFavoritesButton();
    showFavorites(); // Refresh the modal
    console.log(`✅ Removed "${toolName}" from favorites`);
}

// Close modal when clicking outside it
document.addEventListener('DOMContentLoaded', () => {
    const favModal = document.getElementById('favoritesModalOverlay');
    if (favModal) {
        // Close when clicking on overlay background
        favModal.addEventListener('click', (e) => {
            if (e.target === favModal) {
                closeFavoritesModal();
            }
        });
        
        // Close when pressing ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && favModal.classList.contains('active')) {
                closeFavoritesModal();
            }
        });
    }
});

// Render trending tools
function renderTrendingTools() {
    const trendingSection = document.getElementById('trending-section');
    if (!trendingSection) return;

    const trendingHTML = trendingTools.map(tool => {
        const isFav = favManager.isFavorite(tool.name, tool.category);
        // Determine badge class based on content
        let badgeClass = 'popular';
        if (tool.badge.includes('Free')) badgeClass = 'free';
        else if (tool.badge.includes('New')) badgeClass = 'new';
        else if (tool.badge.includes('Trending')) badgeClass = 'trending';
        
        return `
            <div class="trending-card">
                <div class="trending-header">
                    <h4>${tool.name}</h4>
                    <button class="favorite-btn ${isFav ? 'active' : ''}" 
                            onclick="toggleFavorite('${tool.name.replace(/'/g, "\\'")}', '${tool.category}')"
                            title="Add to favorites">
                        ❤️
                    </button>
                </div>
                <p class="trending-description">${tool.description}</p>
                <span class="trending-badge ${badgeClass}">${tool.badge}</span>
                <button  style="background: none; border: none; color: var(--accent-color); cursor: pointer; text-decoration: none; font-weight: 600; padding: 0;" onclick="openToolInNewTab('${tool.url.replace(/'/g, "\\'")}')" title="Open ${tool.name}">Learn More →</button>
            </div>
        `;
    }).join('');

    trendingSection.innerHTML = `
        <h2>🔥 Trending Tools This Week</h2>
        <div class="trending-grid">
            ${trendingHTML}
        </div>
    `;
}

// Search functionality (NOW WITH CATEGORY SEARCH)
function searchTools(query) {
    query = query.toLowerCase().trim();
    const toolsSection = document.getElementById('tools-section');

    console.log(`🔍 DEBUG: searchTools() called with query: "${query}"`);

    if (!query) {
        console.log("🔙 DEBUG: Empty search - returning to categories view");
        renderCategories();
        return;
    }

    const results = [];
    Object.entries(toolsData).forEach(([categoryKey, categoryData]) => {
        // Check if category name matches
        const categoryMatch = categoryData.name.toLowerCase().includes(query);
        
        if (categoryMatch) {
            // If category matches, add ALL tools from that category
            console.log(`✅ DEBUG: Category "${categoryData.name}" matches search`);
            categoryData.tools.forEach(tool => {
                results.push({ ...tool, category: categoryKey, categoryName: categoryData.name });
            });
        } else {
            // Otherwise, check individual tools
            categoryData.tools.forEach(tool => {
                if (tool.name.toLowerCase().includes(query) || 
                    tool.description.toLowerCase().includes(query)) {
                    console.log(`✅ DEBUG: Tool "${tool.name}" matches search`);
                    results.push({ ...tool, category: categoryKey, categoryName: categoryData.name });
                }
            });
        }
    });

    console.log(`📊 DEBUG: Found ${results.length} matching tools`);

    if (results.length === 0) {
        console.log(`⚠️ DEBUG: No tools found for query: "${query}"`);
        toolsSection.innerHTML = `
            <div class="empty-state">
                <p>🔍 No tools found matching "<strong>${query}</strong>"</p>
                <p style="font-size: 0.9rem; margin-top: 8px; opacity: 0.7;">Try searching for: coding, video, image, writing, marketing, etc.</p>
            </div>
        `;
        document.querySelectorAll('.card').forEach(card => card.classList.remove('active-card'));
        return;
    }

    console.log(`✅ DEBUG: Rendering ${results.length} search results`);

    const toolsHTML = results.map(tool => {
        const isFav = favManager.isFavorite(tool.name, tool.category);
        // Determine badge class based on content
        let badgeClass = 'popular';
        if (tool.badge.includes('Free')) badgeClass = 'free';
        else if (tool.badge.includes('New')) badgeClass = 'new';
        else if (tool.badge.includes('Trending')) badgeClass = 'trending';
        
        return `
            <div class="tool-card">
                <div class="tool-header">
                    <div>
                        <h3>${tool.name}</h3>
                        <span class="category-badge">${tool.categoryName}</span>
                    </div>
                    <button class="favorite-btn ${isFav ? 'active' : ''}" 
                            onclick="toggleFavorite('${tool.name.replace(/'/g, "\\'")}', '${tool.category}')"
                            title="Add to favorites">
                        ❤️
                    </button>
                </div>
                <p class="tool-description">${tool.description}</p>
                <div class="tool-footer">
                    <div class="badge-container">
                        <span class="badge ${badgeClass}">${tool.badge}</span>
                    </div>
                    <button class="tool-link" onclick="openToolInNewTab('${tool.url.replace(/'/g, "\\'")}')" title="Open ${tool.name}">Use Tool →</button>
                </div>
            </div>
        `;
    }).join('');

    toolsSection.innerHTML = `
        <div class="tools-container">
            <h2>Search Results (${results.length})</h2>
            <div class="tools-grid">
                ${toolsHTML}
            </div>
        </div>
    `;

    document.querySelectorAll('.card').forEach(card => card.classList.remove('active-card'));
}

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    updateDarkModeButton();
}

function loadDarkMode() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
        document.body.classList.add('dark-mode');
    }
    updateDarkModeButton();
}

function updateDarkModeButton() {
    const btn = document.getElementById('dark-mode-btn');
    if (btn) {
        const icon = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
        btn.textContent = icon;
    }
}

function updateFavoritesButton() {
    const btn = document.getElementById('favorites-btn');
    const count = favManager.favorites.length;
    if (btn) {
        btn.textContent = count > 0 ? `❤️ Favorites (${count})` : '❤️ Favorites';
    }
}

// Setup event listeners
function setupEventListeners() {
    console.log("🔗 DEBUG: setupEventListeners() called");
    
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        console.log("✅ DEBUG: Found #search-input element");
        searchInput.addEventListener('input', (e) => {
            console.log(`🎯 DEBUG: Search input changed - value: "${e.target.value}"`);
            searchTools(e.target.value);
        });
        console.log("✅ DEBUG: Added 'input' event listener to search bar");
    } else {
        console.error("❌ ERROR: #search-input element not found!");
    }

    const darkModeBtn = document.getElementById('dark-mode-btn');
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', toggleDarkMode);
        console.log("✅ DEBUG: Added dark mode toggle listener");
    }

    updateFavoritesButton();
    console.log("✅ DEBUG: setupEventListeners() completed");
}

// Initialize when DOM is ready
console.log("📄 DEBUG: DOMContentLoaded event listener registered");

// ===== MANUAL TEST FUNCTION (FOR DEBUGGING) =====
window.testCategoryClick = function(categoryKey) {
    console.log(`\n🧪 TEST: Manually triggering category click for "${categoryKey}"`);
    console.log("Available categories:", Object.keys(toolsData));
    
    if (!toolsData[categoryKey]) {
        console.error(`❌ Category "${categoryKey}" not found!`);
        return;
    }
    
    console.log(`✅ Category "${categoryKey}" found, rendering tools...`);
    renderTools(categoryKey);
    
    // Highlight the category card
    const categoryCard = Array.from(document.querySelectorAll('.card')).find(card => 
        card.textContent.includes(toolsData[categoryKey].name)
    );
    if (categoryCard) {
        document.querySelectorAll('.card').forEach(c => c.classList.remove('active-card'));
        categoryCard.classList.add('active-card');
        console.log("✅ Updated active category styling");
    }
};

// Global test function to check all categories
window.testAllCategories = function() {
    console.log("\n🧪 TESTING ALL CATEGORIES:\n");
    Object.keys(toolsData).forEach(key => {
        console.log(`- ${key}: ${toolsData[key].tools.length} tools`);
    });
    console.log("\nUsage: testCategoryClick('coding'), testCategoryClick('video'), etc.");
};

// Search test function
window.testSearch = function(query) {
    console.log(`\n🔍 TEST: Testing search for "${query}"`);
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = query;
        searchInput.dispatchEvent(new Event('input', { bubbles: true }));
        console.log("✅ Triggered search input event");
    } else {
        console.error("❌ Search input not found");
    }
};

// Direct category display function (NO dependencies)
window.showCategoryDirect = function(categoryKey) {
    console.log(`\n🔴 DIRECT CALL: showCategoryDirect('${categoryKey}')`);
    console.log("This function bypasses all event listeners and directly renders tools");
    
    // Get the container
    const toolsSection = document.getElementById('tools-section');
    if (!toolsSection) {
        console.error("❌ CRITICAL: #tools-section not found!");
        return;
    }
    
    // Validate category
    if (!toolsData[categoryKey]) {
        console.error(`❌ CRITICAL: Category '${categoryKey}' not found!`);
        console.log("Available categories:", Object.keys(toolsData));
        return;
    }
    
    // Directly call renderTools
    console.log(`✅ Rendering tools for '${categoryKey}'...`);
    renderTools(categoryKey);
    
    // Update active card styling
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('active-card');
    });
    const activeCard = document.getElementById(`category-${categoryKey}`);
    if (activeCard) {
        activeCard.classList.add('active-card');
        console.log(`✅ Updated active card styling`);
    }
};

// Health check function
window.healthCheck = function() {
    console.log("\n=== 🏥 SYSTEM HEALTH CHECK ===\n");
    
    // Check 1: Script loaded
    console.log("✅ script.js loaded successfully");
    
    // Check 2: toolsData exists
    console.log(`✅ toolsData object exists with ${Object.keys(toolsData).length} categories`);
    
    // Check 3: DOM elements
    const categoryContainer = document.querySelector('.categories');
    const toolsSection = document.getElementById('tools-section');
    const searchInput = document.getElementById('search-input');
    console.log(`${categoryContainer ? '✅' : '❌'} .categories element: ${categoryContainer ? 'FOUND' : 'MISSING'}`);
    console.log(`${toolsSection ? '✅' : '❌'} #tools-section element: ${toolsSection ? 'FOUND' : 'MISSING'}`);
    console.log(`${searchInput ? '✅' : '❌'} #search-input element: ${searchInput ? 'FOUND' : 'MISSING'}`);
    
    // Check 4: Functions
    console.log(`${typeof renderCategories === 'function' ? '✅' : '❌'} renderCategories function exists`);
    console.log(`${typeof renderTools === 'function' ? '✅' : '❌'} renderTools function exists`);
    console.log(`${typeof showCategory === 'function' ? '✅' : '❌'} showCategory function exists`);
    console.log(`${typeof searchTools === 'function' ? '✅' : '❌'} searchTools function exists`);
    console.log(`${typeof openToolInNewTab === 'function' ? '✅' : '❌'} openToolInNewTab function exists`);
    
    // Check 5: Category cards
    const cards = document.querySelectorAll('.card');
    console.log(`${cards.length > 0 ? '✅' : '❌'} Category cards: ${cards.length} cards rendered`);
    
    // Check 6: Search functionality
    if (searchInput) {
        console.log(`✅ Search input is functional`);
        console.log(`   Try: testSearch('coding') or testSearch('video')`);
    }
    
    console.log("\n=== If all items show ✅, the system is working correctly! ===\n");
    console.log("💡 TIPS:");
    console.log("  - testCategoryClick('coding') - manually test category click");
    console.log("  - testSearch('image') - test search functionality");
    console.log("  - testAllCategories() - list all categories");
    console.log("  - showCategoryDirect('video') - directly show a category");
};



document.addEventListener('DOMContentLoaded', () => {
    console.log("\n" + "=".repeat(60));
    console.log("🚀 AI TOOLS HUB - SYSTEM INITIALIZATION");
    console.log("=".repeat(60));
    console.log("📄 DOM Content Loaded - Ready to initialize!");
    console.log("💡 Open DevTools Console (F12) to see debug messages");
    console.log("💡 Type 'healthCheck()' to run system diagnostics");
    console.log("💡 Type 'testSearch(\"coding\")' to test search");
    console.log("=".repeat(60) + "\n");
    
    init();
    
    console.log("\n" + "=".repeat(60));
    console.log("✅ INITIALIZATION COMPLETE!");
    console.log("=".repeat(60));
    console.log("🔍 Search is ready - type in the search bar");
    console.log("📂 Click any category to view tools");
    console.log("❤️  Click the heart icon to save favorites");
    console.log("=".repeat(60) + "\n");
});// 🔥 ALL TOOLS (minimum example)
const allTools = [
  { name: "ChatGPT", desc: "AI chatbot", link: "https://chat.openai.com" },
  { name: "GitHub Copilot", desc: "Coding assistant", link: "https://github.com/features/copilot" },
  { name: "CapCut", desc: "Video editor", link: "https://capcut.com" },
  { name: "Runway ML", desc: "AI video tools", link: "https://runwayml.com" },
  { name: "Midjourney", desc: "Image generator", link: "https://midjourney.com" },
  { name: "DALL·E", desc: "Image AI", link: "https://openai.com" },
  { name: "Canva AI", desc: "Design tools", link: "https://canva.com" },
  { name: "Pictory", desc: "Text to video", link: "https://pictory.ai" },
  { name: "Gamma AI", desc: "PPT maker", link: "https://gamma.app" },
  { name: "Tome AI", desc: "Presentation AI", link: "https://tome.app" }
];

// 🔍 SEARCH FUNCTION
document.getElementById("searchInput").addEventListener("input", function () {

  const query = this.value.toLowerCase();
  const resultsContainer = document.getElementById("search-results");

  resultsContainer.innerHTML = "";

  if (query === "") return;

  const filtered = allTools.filter(tool =>
    tool.name.toLowerCase().includes(query) ||
    tool.desc.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    resultsContainer.innerHTML = "<p>No tools found</p>";
    return;
  }

  filtered.forEach(tool => {
    const div = document.createElement("div");

    div.className = "search-card";

    div.innerHTML = `
      <h3>${tool.name}</h3>
      <p>${tool.desc}</p>
    `;

    // 🔥 CLICK → OPEN TOOL
    div.onclick = () => {
      window.open(tool.link, "_blank");
    };

    resultsContainer.appendChild(div);
  });

}); 
