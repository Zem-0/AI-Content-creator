export default[
    {
        name:'Blog Title',
        desc:'An AI tool that generates blog titles',
        category:'Blog',
        icon:'https://cdn-icons-gif.flaticon.com/12747/12747824.gif',
        aiPrompt:'Give me 5 blog topics ideas in bullet wise based on given niche and outline topic (no discription) in Reach text editor format',
        slug:'generate-blog-title',
        form:[{
            label:'Enter your blog niche',
            field:'input',
            name:'niche',
            required:true
        },
            {label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
    ]
    },
       
        {
            name: 'Blog Content',
            desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
            category: 'Blog',
            icon: 'https://cdn-icons-gif.flaticon.com/14447/14447732.gif',
            aiPrompt: 'Generate a detailed blog post based on the given title and outline.',
            slug: 'generate-blog-content',
            form: [
                {
                    label: 'Enter your blog title',
                    field: 'input',
                    name: 'title',
                    required: true
                },
                {
                    label: 'Enter blog outline',
                    field: 'textarea',
                    name: 'outline'
                }
            ]
        },
        {
            name: 'Blog Topic Ideas',
            desc: 'An AI tool that generates catchy and viral-worthy blog topic ideas in your chosen language.',
            category: 'Blog',
            icon: 'https://cdn-icons-gif.flaticon.com/16678/16678108.gif',
            aiPrompt: 'Generate 5 blog topic ideas based on the given niche.',
            slug: 'generate-blog-topic-ideas',
            form: [
                {
                    label: 'Enter your blog niche',
                    field: 'input',
                    name: 'niche',
                    required: true
                }
            ]
        },
        {
            name: 'Youtube SEO Title',
            desc: 'An AI tool that generates SEO-friendly YouTube titles.',
            category: 'YouTube',
            icon: 'https://cdn-icons-png.flaticon.com/128/2504/2504965.png',
            aiPrompt: 'Generate 5 SEO-friendly YouTube titles in bullet point format  based on the given topic in rich text editor format.',
            slug: 'generate-youtube-seo-title',
            form: [
                {
                    label: 'Enter your video topic',
                    field: 'input',
                    name: 'topic',
                    required: true
                }
            ]
        },
        {
            name: 'Youtube Description',
            desc: 'An AI tool that generates YouTube video descriptions.',
            category: 'YouTube',
            icon: 'https://cdn-icons-png.flaticon.com/128/49/49084.png',
            aiPrompt: 'Generate a detailed YouTube video description based on the given title and content.',
            slug: 'generate-youtube-description',
            form: [
                {
                    label: 'Enter your video title',
                    field: 'input',
                    name: 'title',
                    required: true
                },
                {
                    label: 'Enter video content',
                    field: 'textarea',
                    name: 'content'
                }
            ]
        },
        {
            name: 'Youtube Tags',
            desc: 'An AI tool that generates YouTube tags.',
            category: 'YouTube',
            icon: 'https://cdn-icons-png.flaticon.com/128/3938/3938026.png',
            aiPrompt: 'Generate a list of relevant YouTube tags based on the given topic.',
            slug: 'generate-youtube-tags',
            form: [
                {
                    label: 'Enter your video topic',
                    field: 'input',
                    name: 'topic',
                    required: true
                }
            ]
        },
        {
            name: 'Rewrite Article (Plagiarism Free)',
            desc: 'Use this tool to rewrite existing articles or blog posts to make them plagiarism-free.',
            category: 'Writing',
            icon: 'https://cdn-icons-gif.flaticon.com/11260/11260694.gif',
            aiPrompt: 'Rewrite the given article to be plagiarism-free and bypass AI detectors.',
            slug: 'rewrite-article',
            form: [
                {
                    label: 'Enter the original article',
                    field: 'textarea',
                    name: 'article',
                    required: true
                }
            ]
        },
        {
            name: 'Text Improver',
            desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result.',
            category: 'Writing',
            icon: 'https://cdn-icons-gif.flaticon.com/14447/14447642.gif',
            aiPrompt: 'Improve the given text for clarity and readability, suggesting better word choices.',
            slug: 'improve-text',
            form: [
                {
                    label: 'Enter the text',
                    field: 'textarea',
                    name: 'text',
                    required: true
                }
            ]
        },
        {
            name: 'Add Emojis to Text',
            desc: 'An AI tool that adds relevant emojis to your text.',
            category: 'Writing',
            icon: 'https://cdn-icons-gif.flaticon.com/11175/11175758.gif',
            aiPrompt: 'Add relevant emojis to the given text.',
            slug: 'add-emojis-to-text',
            form: [
                {
                    label: 'Enter the text',
                    field: 'textarea',
                    name: 'text',
                    required: true
                }
            ]
        },
        {
            name: 'Instagram Post Generator',
            desc: 'An AI tool that generates catchy Instagram post ideas.',
            category: 'Instagram',
            icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
            aiPrompt: 'Generate catchy Instagram post ideas based on the given niche.',
            slug: 'generate-instagram-post',
            form: [
                {
                    label: 'Enter your Instagram niche',
                    field: 'input',
                    name: 'niche',
                    required: true
                }
            ]
        },
        {
            name: 'Instagram Hashtag Generator',
            desc: 'An AI tool that generates relevant Instagram hashtags.',
            category: 'Instagram',
            icon: 'https://cdn-icons-png.flaticon.com/128/2175/2175198.png',
            aiPrompt: 'Generate a list of relevant Instagram hashtags based on the given topic.',
            slug: 'generate-instagram-hashtags',
            form: [
                {
                    label: 'Enter your Instagram topic',
                    field: 'input',
                    name: 'topic',
                    required: true
                }
            ]
        },
        {
            name: 'Instagram Post/Reel Idea',
            desc: 'An AI tool that generates new and trending Instagram post/reel ideas based on your niche.',
            category: 'Instagram',
            icon: 'https://cdn-icons-png.flaticon.com/128/174/174855.png',
            aiPrompt: 'Generate new and trending Instagram post/reel ideas based on the given niche.',
            slug: 'generate-instagram-post-reel-idea',
            form: [
                {
                    label: 'Enter your Instagram niche',
                    field: 'input',
                    name: 'niche',
                    required: true
                }
            ]
        },
        {
            name: 'English Grammar Check',
            desc: 'An AI tool to correct your English grammar by providing the text.',
            category: 'Writing',
            icon: 'https://cdn-icons-png.flaticon.com/128/12596/12596743.png',
            aiPrompt: 'Correct the grammar of the given text.',
            slug: 'check-english-grammar',
            form: [
                {
                    label: 'Enter the text',
                    field: 'textarea',
                    name: 'text',
                    required: true
                }
            ]
        },
        {
            name: 'Write Code',
            desc: 'An AI tool to generate programming code in any language.',
            category: 'Coding',
            icon: 'https://cdn-icons-gif.flaticon.com/10690/10690700.gif',
            aiPrompt: 'Generate code for the given task in the specified programming language.',
            slug: 'write-code',
            form: [
                {
                    label: 'Enter the task description',
                    field: 'textarea',
                    name: 'task',
                    required: true
                },
                {
                    label: 'Enter the programming language',
                    field: 'input',
                    name: 'language',
                    required: true
                }
            ]
        },
        {
            name: 'Explain Code',
            desc: 'An AI tool to explain programming code in any language.',
            category: 'Coding',
            icon: 'https://cdn-icons-gif.flaticon.com/13470/13470976.gif',
            aiPrompt: 'Explain the given code in detail.',
            slug: 'explain-code',
            form: [
                {
                    label: 'Enter the code',
                    field: 'textarea',
                    name: 'code',
                    required: true
                }
            ]
        },
        {
            name: 'Code Bug Detector',
            desc: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs.',
            category: 'Coding',
            icon: 'https://cdn-icons-gif.flaticon.com/16313/16313584.gif',
            aiPrompt: 'Detect and fix bugs in the given code.',
            slug: 'detect-code-bug',
            form: [
                {
                    label: 'Enter the code',
                    field: 'textarea',
                    name: 'code',
                    required: true
                }]
        } 
]