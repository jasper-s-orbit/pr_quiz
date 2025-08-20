// --- Local Storage Key ---
        const QUIZ_GUIDE_SHOWN_KEY = 'quizGuideShown';

        // --- Fallback for crypto.randomUUID() ---
        function generateUUID() {
            if (typeof crypto !== 'undefined' && crypto.randomUUID) {
                return crypto.randomUUID();
            }
            // Fallback for environments where crypto.randomUUID is not available
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        // --- Quiz Questions Data (Fill-in-the-blank format) ---
        const allQuestions = [
            // --- Production Questions (30 questions) ---
            {
                id: 'PROD_1',
                question: "_____ is the process of creating goods and services by combining resources to satisfy human needs.",
                blanks: 1,
                options: [
                    "Production",
                    "Marketing",
                    "Manufacturing",
                    "Quality Control"
                ],
                correctAnswer: "Production",
                explanation: "Production is the overarching process of making goods and services."
            },
            {
                id: 'PROD_2',
                question: "The five main types of production mentioned are Job, Batch, Mass, Continuous, and _____ Production.",
                blanks: 1,
                options: [
                    "Project-Based",
                    "Service",
                    "Manual",
                    "Digital"
                ],
                correctAnswer: "Project-Based",
                explanation: "Large, complex, one-off endeavors characterize project-based production."
            },
            {
                id: 'PROD_3',
                question: "Job production involves creating _____, custom-made items.",
                blanks: 1,
                options: [
                    "one-off",
                    "standardized",
                    "large batches",
                    "continuous flow"
                ],
                correctAnswer: "one-off",
                explanation: "Job production is tailored for unique, individual products like wedding dresses."
            },
            {
                id: 'PROD_4',
                question: "Batch production is suitable for producing _____ of items together, like bread or cookies.",
                blanks: 1,
                options: [
                    "groups",
                    "single",
                    "large quantities",
                    "continuous streams"
                ],
                correctAnswer: "groups",
                explanation: "Batch production allows for efficient production of a defined quantity of similar items."
            },
            {
                id: 'PROD_5',
                question: "Mass production focuses on large-scale production of _____ goods, such as cars.",
                blanks: 1,
                options: [
                    "standardized",
                    "custom",
                    "unique",
                    "high-value"
                ],
                correctAnswer: "standardized",
                explanation: "Mass production aims for efficiency and uniformity in large volumes."
            },
            {
                id: 'PROD_6',
                question: "An oil refinery is an example of _____ production, operating 24/7.",
                blanks: 1,
                options: [
                    "Continuous",
                    "Job",
                    "Batch",
                    "Project-Based"
                ],
                correctAnswer: "Continuous",
                explanation: "Continuous production runs non-stop, typically for commodities."
            },
            {
                id: 'PROD_7',
                question: "One importance of production is that it _____ consumer needs.",
                blanks: 1,
                options: [
                    "satisfies",
                    "creates",
                    "limits",
                    "ignores"
                ],
                correctAnswer: "satisfies",
                explanation: "The primary goal of production is to meet consumer demand."
            },
            {
                id: 'PROD_8',
                question: "Production is important because it creates _____ and adds value to raw materials.",
                blanks: 1,
                options: [
                    "jobs",
                    "debt",
                    "waste",
                    "competition"
                ],
                correctAnswer: "jobs",
                explanation: "Production is a significant source of employment."
            },
            {
                id: 'PROD_9',
                question: "By adding value to raw materials, production contributes to _____ growth.",
                blanks: 1,
                options: [
                    "economic",
                    "political",
                    "social",
                    "technological"
                ],
                correctAnswer: "economic",
                explanation: "Value addition through production fuels economic development."
            },
            {
                id: 'PROD_10',
                question: "Building bridges falls under the category of _____ production.",
                blanks: 1,
                options: [
                    "Project-Based",
                    "Mass",
                    "Batch",
                    "Job"
                ],
                correctAnswer: "Project-Based",
                explanation: "Complex, large-scale constructions are typical of project-based production."
            },
            {
                id: 'PROD_11',
                question: "Production encompasses combining resources such as raw materials, _____, and machines.",
                blanks: 1,
                options: [
                    "labor",
                    "marketing",
                    "sales",
                    "finances"
                ],
                correctAnswer: "labor",
                explanation: "Labor is a fundamental resource in any production process."
            },
            {
                id: 'PROD_12',
                question: "A key benefit of production for a country is that it supports _____.",
                blanks: 1,
                options: [
                    "industrialization",
                    "liberalization",
                    "globalization",
                    "urbanization"
                ],
                correctAnswer: "industrialization",
                explanation: "Production is a driver of industrial growth and development."
            },
            {
                id: 'PROD_13',
                question: "Custom-made items are a characteristic of _____ production.",
                blanks: 1,
                options: [
                    "Job",
                    "Batch",
                    "Mass",
                    "Continuous"
                ],
                correctAnswer: "Job",
                explanation: "Job production caters to individual customer specifications."
            },
            {
                id: 'PROD_14',
                question: "The output of mass production is typically high volumes of _____ goods.",
                blanks: 1,
                options: [
                    "standardized",
                    "diversified",
                    "unique",
                    "complex"
                ],
                correctAnswer: "standardized",
                explanation: "Mass production emphasizes consistency across large quantities."
            },
            {
                id: 'PROD_15',
                question: "Production is fundamental for satisfying human _____ by creating useful goods and services.",
                blanks: 1,
                options: [
                    "needs",
                    "wants",
                    "desires",
                    "demands"
                ],
                correctAnswer: "needs",
                explanation: "The ultimate aim of production is to fulfill human requirements."
            },
            {
                id: 'PROD_16',
                question: "In batch production, items are produced in _____ before moving to the next stage.",
                blanks: 1,
                options: [
                    "groups",
                    "individual units",
                    "a continuous flow",
                    "random order"
                ],
                correctAnswer: "groups",
                explanation: "Batch production processes items together in distinct groups."
            },
            {
                id: 'PROD_17',
                question: "Continuous production is characterized by an _____, 24/7 operation.",
                blanks: 1,
                options: [
                    "ongoing",
                    "intermittent",
                    "seasonal",
                    "limited"
                ],
                correctAnswer: "ongoing",
                explanation: "This type of production is uninterrupted for maximum output."
            },
            {
                id: 'PROD_18',
                question: "One of the resources combined in production is _____ materials.",
                blanks: 1,
                options: [
                    "raw",
                    "finished",
                    "processed",
                    "secondary"
                ],
                correctAnswer: "raw",
                explanation: "Raw materials are the basic inputs transformed during production."
            },
            {
                id: 'PROD_19',
                question: "Production allows for the transformation of inputs into _____.",
                blanks: 1,
                options: [
                    "outputs",
                    "inputs",
                    "resources",
                    "processes"
                ],
                correctAnswer: "outputs",
                explanation: "The end result of production is the output of goods or services."
            },
            {
                id: 'PROD_20',
                question: "Creating services, such as education or healthcare, is also part of the _____ process.",
                blanks: 1,
                options: [
                    "production",
                    "manufacturing",
                    "marketing",
                    "distribution"
                ],
                correctAnswer: "production",
                explanation: "Production encompasses both tangible goods and intangible services."
            },
            {
                id: 'PROD_21',
                question: "The economic benefit of production includes adding _____ to raw materials.",
                blanks: 1,
                options: [
                    "value",
                    "cost",
                    "weight",
                    "volume"
                ],
                correctAnswer: "value",
                explanation: "Production transforms raw materials into more valuable finished products."
            },
            {
                id: 'PROD_22',
                question: "An example of job production is the creation of a unique _____.",
                blanks: 1,
                options: [
                    "wedding dress",
                    "batch of cookies",
                    "car",
                    "barrel of oil"
                ],
                correctAnswer: "wedding dress",
                explanation: "A wedding dress is a classic example of a one-off, custom item."
            },
            {
                id: 'PROD_23',
                question: "For project-based production, the projects are often large and _____.",
                blanks: 1,
                options: [
                    "complex",
                    "simple",
                    "repetitive",
                    "standardized"
                ],
                correctAnswer: "complex",
                explanation: "Building bridges or large infrastructure projects require complex planning and execution."
            },
            {
                id: 'PROD_24',
                question: "Production involves combining various _____ to create goods and services.",
                blanks: 1,
                options: [
                    "resources",
                    "profits",
                    "strategies",
                    "customers"
                ],
                correctAnswer: "resources",
                explanation: "Resources are the inputs necessary for production."
            },
            {
                id: 'PROD_25',
                question: "The goal of production is to effectively _____ human needs.",
                blanks: 1,
                options: [
                    "satisfy",
                    "ignore",
                    "create",
                    "limit"
                ],
                correctAnswer: "satisfy",
                explanation: "Meeting human needs is the ultimate objective of production."
            },
            {
                id: 'PROD_26',
                question: "A company manufacturing 1000 identical smartphones would likely use _____ production.",
                blanks: 1,
                options: [
                    "Mass",
                    "Job",
                    "Batch",
                    "Continuous"
                ],
                correctAnswer: "Mass",
                explanation: "Manufacturing a large number of identical items is characteristic of mass production."
            },
            {
                id: 'PROD_27',
                question: "Production contributes to the national economy by generating _____ and employment.",
                blanks: 1,
                options: [
                    "income",
                    "debt",
                    "inflation",
                    "exports"
                ],
                correctAnswer: "income",
                explanation: "Economic growth is supported by income generation from production activities."
            },
            {
                id: 'PROD_28',
                question: "When a bakery produces 500 loaves of white bread, it is an example of _____ production.",
                blanks: 1,
                options: [
                    "Batch",
                    "Job",
                    "Mass",
                    "Continuous"
                ],
                correctAnswer: "Batch",
                explanation: "Producing a specific quantity of identical items at once is batch production."
            },
            {
                id: 'PROD_29',
                question: "Production involves transforming _____ into finished goods or services.",
                blanks: 1,
                options: [
                    "inputs",
                    "outputs",
                    "strategies",
                    "profits"
                ],
                correctAnswer: "inputs",
                explanation: "Inputs are converted into desired outputs during the production process."
            },
            {
                id: 'PROD_30',
                question: "The ability of a country to produce goods and services is crucial for its overall _____.",
                blanks: 1,
                options: [
                    "development",
                    "consumption",
                    "taxation",
                    "importation"
                ],
                correctAnswer: "development",
                explanation: "Production capacity is a key indicator of a nation's economic development."
            },

            // --- Manufacturing Questions (25 questions) ---
            {
                id: 'MFG_1',
                question: "_____ is a type of production that involves using machines, tools, and labor to convert raw materials into finished, tangible goods.",
                blanks: 1,
                options: [
                    "Manufacturing",
                    "Production",
                    "Marketing",
                    "Quality Control"
                ],
                correctAnswer: "Manufacturing",
                explanation: "Manufacturing specifically deals with making physical products using mechanical means."
            },
            {
                id: 'MFG_2',
                question: "Unlike production, manufacturing exclusively produces _____ goods.",
                blanks: 1,
                options: [
                    "tangible",
                    "intangible",
                    "conceptual",
                    "service-based"
                ],
                correctAnswer: "tangible",
                explanation: "Manufacturing results in physical products that can be touched and seen."
            },
            {
                id: 'MFG_3',
                question: "One type of manufacturing focuses on producing items in a repetitive manner, known as _____ Manufacturing.",
                blanks: 1,
                options: [
                    "Repetitive",
                    "Discrete",
                    "Job Shop",
                    "Continuous Process"
                ],
                correctAnswer: "Repetitive",
                explanation: "Repetitive manufacturing is about continuous flow of identical or similar items."
            },
            {
                id: 'MFG_4',
                question: "When raw materials are converted into finished products, manufacturing primarily uses machines, _____, and labor.",
                blanks: 1,
                options: [
                    "tools",
                    "services",
                    "marketing",
                    "strategies"
                ],
                correctAnswer: "tools",
                explanation: "Tools are essential for shaping and assembling materials in manufacturing."
            },
            {
                id: 'MFG_5',
                question: "Manufacturing increases _____ by efficiently transforming raw materials.",
                blanks: 1,
                options: [
                    "productivity",
                    "waste",
                    "cost",
                    "time"
                ],
                correctAnswer: "productivity",
                explanation: "Efficient manufacturing processes lead to higher output per input."
            },
            {
                id: 'MFG_6',
                question: "A key importance of manufacturing is its ability to build _____ capacity for a nation.",
                blanks: 1,
                options: [
                    "export",
                    "import",
                    "consumption",
                    "service"
                ],
                correctAnswer: "export",
                explanation: "Manufacturing creates products that can be sold internationally, boosting exports."
            },
            {
                id: 'MFG_7',
                question: "Manufacturing encourages innovation and _____ development.",
                blanks: 1,
                options: [
                    "technology",
                    "social",
                    "political",
                    "cultural"
                ],
                correctAnswer: "technology",
                explanation: "The manufacturing sector often drives advancements in technology and processes."
            },
            {
                id: 'MFG_8',
                question: "Discrete Manufacturing involves the production of distinct items that can be easily _____.",
                blanks: 1,
                options: [
                    "counted",
                    "blended",
                    "melted",
                    "dissolved"
                ],
                correctAnswer: "counted",
                explanation: "Discrete products are individual, separate units, unlike liquids or gases."
            },
            {
                id: 'MFG_9',
                question: "Job Shop Manufacturing is characterized by customized or _____ volume production.",
                blanks: 1,
                options: [
                    "low",
                    "high",
                    "mass",
                    "continuous"
                ],
                correctAnswer: "low",
                explanation: "Job shops handle unique, small-scale orders."
            },
            {
                id: 'MFG_10',
                question: "A significant benefit of manufacturing is generating income and foreign _____.",
                blanks: 1,
                options: [
                    "exchange",
                    "debt",
                    "policy",
                    "labor"
                ],
                correctAnswer: "exchange",
                explanation: "Exporting manufactured goods brings in foreign currency."
            },
            {
                id: 'MFG_11',
                question: "Manufacturing plays a vital role in industrial _____.",
                blanks: 1,
                options: [
                    "development",
                    "decline",
                    "stagnation",
                    "importation"
                ],
                correctAnswer: "development",
                explanation: "It is a cornerstone of a nation's industrial progress."
            },
            {
                id: 'MFG_12',
                question: "In the context of production, manufacturing focuses solely on physical _____.",
                blanks: 1,
                options: [
                    "goods",
                    "services",
                    "ideas",
                    "strategies"
                ],
                correctAnswer: "goods",
                explanation: "Manufacturing yields tangible products."
            },
            {
                id: 'MFG_13',
                question: "The use of _____ and tools is central to the manufacturing process.",
                blanks: 1,
                options: [
                    "machines",
                    "manual labor",
                    "marketing",
                    "human resources"
                ],
                correctAnswer: "machines",
                explanation: "Machinery is fundamental to modern manufacturing efficiency."
            },
            {
                id: 'MFG_14',
                question: "Manufacturing aids a country's economy by increasing its productive _____.",
                blanks: 1,
                options: [
                    "capacity",
                    "demand",
                    "unemployment",
                    "debt"
                ],
                correctAnswer: "capacity",
                explanation: "It allows for higher volumes of output."
            },
            {
                id: 'MFG_15',
                question: "Converting raw materials into finished goods is the core function of _____.",
                blanks: 1,
                options: [
                    "manufacturing",
                    "farming",
                    "education",
                    "software development"
                ],
                correctAnswer: "manufacturing",
                explanation: "This transformation is the essence of manufacturing."
            },
            {
                id: 'MFG_16',
                question: "Batch Manufacturing involves producing items in _____ and then moving to the next stage.",
                blanks: 1,
                options: [
                    "groups",
                    "continuous streams",
                    "one-off units",
                    "random order"
                ],
                correctAnswer: "groups",
                explanation: "Similar to batch production, but specifically for physical goods."
            },
            {
                id: 'MFG_17',
                question: "Continuous Process Manufacturing is often used for products like chemicals or _____.",
                blanks: 1,
                options: [
                    "petroleum",
                    "custom furniture",
                    "clothing",
                    "electronics"
                ],
                correctAnswer: "petroleum",
                explanation: "This type is for products that flow continuously, like liquids or gases."
            },
            {
                id: 'MFG_18',
                question: "Manufacturing involves a significant component of _____ resources.",
                blanks: 1,
                options: [
                    "labor",
                    "financial",
                    "digital",
                    "advertising"
                ],
                correctAnswer: "labor",
                explanation: "Human effort is required alongside machines in manufacturing."
            },
            {
                id: 'MFG_19',
                question: "The main output of manufacturing is tangible _____.",
                blanks: 1,
                options: [
                    "products",
                    "services",
                    "data",
                    "strategies"
                ],
                correctAnswer: "products",
                explanation: "Manufacturing produces physical goods."
            },
            {
                id: 'MFG_20',
                question: "Manufacturing aids in building a nation's _____ capacity, leading to economic strength.",
                blanks: 1,
                options: [
                    "industrial",
                    "agricultural",
                    "service",
                    "tourism"
                ],
                correctAnswer: "industrial",
                explanation: "It is a cornerstone of industrial strength."
            },
            {
                id: 'MFG_21',
                question: "When considering types of manufacturing, the production of individual, distinct units falls under _____ Manufacturing.",
                blanks: 1,
                options: [
                    "Discrete",
                    "Repetitive",
                    "Batch",
                    "Continuous Process"
                ],
                correctAnswer: "Discrete",
                explanation: "Discrete manufacturing creates identifiable, separate products."
            },
            {
                id: 'MFG_22',
                question: "Manufacturing helps in converting raw materials into a more _____ form.",
                blanks: 1,
                options: [
                    "usable",
                    "raw",
                    "unprocessed",
                    "basic"
                ],
                correctAnswer: "usable",
                explanation: "The purpose is to make materials ready for consumption or further processing."
            },
            {
                id: 'MFG_23',
                question: "Increased innovation and technology are fostered by a strong _____ sector.",
                blanks: 1,
                options: [
                    "manufacturing",
                    "agricultural",
                    "retail",
                    "financial"
                ],
                correctAnswer: "manufacturing",
                explanation: "This sector often pushes technological boundaries."
            },
            {
                id: 'MFG_24',
                question: "Manufacturing activities contribute to a country's gross domestic _____ (GDP).",
                blanks: 1,
                options: [
                    "product",
                    "profit",
                    "planning",
                    "population"
                ],
                correctAnswer: "product",
                explanation: "It contributes significantly to a nation's economic output."
            },
            {
                id: 'MFG_25',
                question: "The transformation of raw materials into finished goods by manufacturing adds significant _____.",
                blanks: 1,
                options: [
                    "value",
                    "weight",
                    "volume",
                    "cost"
                ],
                correctAnswer: "value",
                explanation: "The process enhances the worth of the materials."
            },

            // --- Marketing Questions (40 questions) ---
            {
                id: 'MKTG_1',
                question: "_____ is the process of identifying, satisfying, and retaining customers through strategic promotion, pricing, distribution, and communication of a product or service.",
                blanks: 1,
                options: [
                    "Marketing",
                    "Production",
                    "Manufacturing",
                    "Quality Control"
                ],
                correctAnswer: "Marketing",
                explanation: "Marketing encompasses all activities to connect products/services with customers."
            },
            {
                id: 'MKTG_2',
                question: "The 7Ps of Marketing include Product, Price, Place, Promotion, People, Process, and _____.",
                blanks: 1,
                options: [
                    "Physical Evidence",
                    "Profits",
                    "Planning",
                    "Publicity"
                ],
                correctAnswer: "Physical Evidence",
                explanation: "Physical Evidence refers to the tangible aspects supporting a service or product."
            },
            {
                id: 'MKTG_3',
                question: "In the 7Ps, 'Product' refers to its features, design, packaging, and _____.",
                blanks: 1,
                options: [
                    "quality",
                    "cost",
                    "location",
                    "promotion"
                ],
                correctAnswer: "quality",
                explanation: "Quality is a key attribute of a product from a marketing perspective."
            },
            {
                id: 'MKTG_4',
                question: "'Price' in the 7Ps includes the cost, discounting, and pricing _____.",
                blanks: 1,
                options: [
                    "strategy",
                    "negotiation",
                    "volume",
                    "revenue"
                ],
                correctAnswer: "strategy",
                explanation: "Pricing strategy determines how a product is valued and offered to the market."
            },
            {
                id: 'MKTG_5',
                question: "'Place' refers to the distribution channels and store _____ where goods are sold.",
                blanks: 1,
                options: [
                    "locations",
                    "prices",
                    "designs",
                    "promotions"
                ],
                correctAnswer: "locations",
                explanation: "Place is about how and where a product reaches the customer."
            },
            {
                id: 'MKTG_6',
                question: "'Promotion' covers advertising, PR, and digital marketing, aiming to get the _____ out.",
                blanks: 1,
                options: [
                    "word",
                    "product",
                    "price",
                    "place"
                ],
                correctAnswer: "word",
                explanation: "Promotion is about communicating the product's value to the market."
            },
            {
                id: 'MKTG_7',
                question: "'People' in the 7Ps includes employees and _____ involved in the marketing process.",
                blanks: 1,
                options: [
                    "customers",
                    "competitors",
                    "suppliers",
                    "regulators"
                ],
                correctAnswer: "customers",
                explanation: "Both internal staff and the target audience are crucial 'People' in marketing."
            },
            {
                id: 'MKTG_8',
                question: "'Process' refers to the procedures and systems that deliver the product to _____.",
                blanks: 1,
                options: [
                    "customers",
                    "suppliers",
                    "employees",
                    "competitors"
                ],
                correctAnswer: "customers",
                explanation: "Process outlines the steps involved in service delivery and customer interaction."
            },
            {
                id: 'MKTG_9',
                question: "Traditional Marketing uses _____ methods to reach customers, like TV and radio.",
                blanks: 1,
                options: [
                    "offline",
                    "online",
                    "digital",
                    "interactive"
                ],
                correctAnswer: "offline",
                explanation: "Traditional marketing relies on conventional, non-digital channels."
            },
            {
                id: 'MKTG_10',
                question: "Digital Marketing promotes products using the internet and digital _____.",
                blanks: 1,
                options: [
                    "platforms",
                    "stores",
                    "factories",
                    "offices"
                ],
                correctAnswer: "platforms",
                explanation: "Digital marketing leverages online channels for promotion."
            },
            {
                id: 'MKTG_11',
                question: "Content Marketing focuses on creating valuable _____ to attract and engage customers, like blogs and videos.",
                blanks: 1,
                options: [
                    "content",
                    "advertisements",
                    "sales",
                    "discounts"
                ],
                correctAnswer: "content",
                explanation: "Content marketing provides useful information to build trust and educate."
            },
            {
                id: 'MKTG_12',
                question: "Social Media Marketing involves promoting products through social _____.",
                blanks: 1,
                options: [
                    "platforms",
                    "events",
                    "emails",
                    "billboards"
                ],
                correctAnswer: "platforms",
                explanation: "Social media marketing uses networks like Instagram and Facebook."
            },
            {
                id: 'MKTG_13',
                question: "Influencer Marketing uses influential people with large or niche _____ to promote products.",
                blanks: 1,
                options: [
                    "followings",
                    "businesses",
                    "products",
                    "offices"
                ],
                correctAnswer: "followings",
                explanation: "Influencers leverage their audience's trust to promote goods."
            },
            {
                id: 'MKTG_14',
                question: "Email Marketing sends targeted messages to people via _____.",
                blanks: 1,
                options: [
                    "email",
                    "social media",
                    "TV",
                    "radio"
                ],
                correctAnswer: "email",
                explanation: "Email marketing allows for personalized and direct communication."
            },
            {
                id: 'MKTG_15',
                question: "Event Marketing promotes through events, either online or _____.",
                blanks: 1,
                options: [
                    "in-person",
                    "via mail",
                    "on TV",
                    "through print"
                ],
                correctAnswer: "in-person",
                explanation: "Event marketing involves direct engagement at physical or virtual gatherings."
            },
            {
                id: 'MKTG_16',
                question: "A key importance of marketing is that it creates _____ of products and services.",
                blanks: 1,
                options: [
                    "awareness",
                    "oblivion",
                    "confusion",
                    "disinterest"
                ],
                correctAnswer: "awareness",
                explanation: "Marketing's first step is to inform potential customers."
            },
            {
                id: 'MKTG_17',
                question: "Marketing helps drive sales and _____ for a business.",
                blanks: 1,
                options: [
                    "revenue",
                    "expenses",
                    "debt",
                    "costs"
                ],
                correctAnswer: "revenue",
                explanation: "Effective marketing converts interest into income."
            },
            {
                id: 'MKTG_18',
                question: "Consistent marketing helps build brand recognition and customer _____.",
                blanks: 1,
                options: [
                    "loyalty",
                    "indifference",
                    "skepticism",
                    "distrust"
                ],
                correctAnswer: "loyalty",
                explanation: "Strong brands foster long-term customer relationships."
            },
            {
                id: 'MKTG_19',
                question: "Marketing supports product development by gathering market _____ and trends.",
                blanks: 1,
                options: [
                    "feedback",
                    "prices",
                    "locations",
                    "promotions"
                ],
                correctAnswer: "feedback",
                explanation: "Customer insights from marketing guide product improvements."
            },
            {
                id: 'MKTG_20',
                question: "One of the key activities of marketing is to understand what people _____.",
                blanks: 1,
                options: [
                    "want",
                    "sell",
                    "produce",
                    "control"
                ],
                correctAnswer: "want",
                explanation: "Understanding customer desires is the foundation of effective marketing."
            },
            {
                id: 'MKTG_21',
                question: "In the 7Ps, 'Physical Evidence' includes branding, packaging, and _____.",
                blanks: 1,
                options: [
                    "receipts",
                    "discounts",
                    "employees",
                    "advertisements"
                ],
                correctAnswer: "receipts",
                explanation: "Tangible cues that support the service or product offering."
            },
            {
                id: 'MKTG_22',
                question: "Marketing activities involve creating the right product or _____.",
                blanks: 1,
                options: [
                    "service",
                    "competitor",
                    "rule",
                    "law"
                ],
                correctAnswer: "service",
                explanation: "Marketing ensures that the offerings meet customer needs."
            },
            {
                id: 'MKTG_23',
                question: "Promoting a product through advertising and social media falls under the '_____' P.",
                blanks: 1,
                options: [
                    "Promotion",
                    "Product",
                    "Price",
                    "Place"
                ],
                correctAnswer: "Promotion",
                explanation: "Promotion is about communicating and enticing customers."
            },
            {
                id: 'MKTG_24',
                question: "Marketing helps a business sell its product in the right _____.",
                blanks: 1,
                options: [
                    "place",
                    "time",
                    "price",
                    "manner"
                ],
                correctAnswer: "place",
                explanation: "Ensuring accessibility and convenient distribution for customers."
            },
            {
                id: 'MKTG_25',
                question: "To retain customers, marketing focuses on keeping customers _____ so they come back.",
                blanks: 1,
                options: [
                    "happy",
                    "aware",
                    "spending",
                    "waiting"
                ],
                correctAnswer: "happy",
                explanation: "Customer satisfaction is crucial for repeat business and loyalty."
            },
            {
                id: 'MKTG_26',
                question: "The types of marketing include Digital, Traditional, Inbound, Outbound, and _____ Marketing.",
                blanks: 1,
                options: [
                    "B2B & B2C",
                    "C2C",
                    "G2C",
                    "P2P"
                ],
                correctAnswer: "B2B & B2C",
                explanation: "Marketing can be directed from business to business or business to consumer."
            },
            {
                id: 'MKTG_27',
                question: "Marketing helps a business achieve a strong competitive _____.",
                blanks: 1,
                options: [
                    "advantage",
                    "disadvantage",
                    "parity",
                    "weakness"
                ],
                correctAnswer: "advantage",
                explanation: "Good marketing sets a business apart from its rivals."
            },
            {
                id: 'MKTG_28',
                question: "The role of marketing in brand recognition is to build a strong brand _____.",
                blanks: 1,
                options: [
                    "identity",
                    "cost",
                    "profit",
                    "employee"
                ],
                correctAnswer: "identity",
                explanation: "A clear identity makes a brand memorable and distinct."
            },
            {
                id: 'MKTG_29',
                question: "Email marketing's strength lies in its _____ and direct reach.",
                blanks: 1,
                options: [
                    "personalization",
                    "broadcasting",
                    "anonymity",
                    "impersonality"
                ],
                correctAnswer: "personalization",
                explanation: "Tailored messages enhance the effectiveness of email marketing."
            },
            {
                id: 'MKTG_30',
                question: "Trade shows and product launches are examples of _____ Marketing.",
                blanks: 1,
                options: [
                    "Event",
                    "Content",
                    "Digital",
                    "Traditional"
                ],
                correctAnswer: "Event",
                explanation: "Event marketing engages audiences at specific gatherings."
            },
            {
                id: 'MKTG_31',
                question: "According to the 7Ps, 'Product' can be a physical product, digital item, service, event, or _____.",
                blanks: 1,
                options: [
                    "experience",
                    "advertisement",
                    "price list",
                    "sales report"
                ],
                correctAnswer: "experience",
                explanation: "The product concept is broad, including intangible offerings and engagements."
            },
            {
                id: 'MKTG_32',
                question: "The calculation of 'Price' involves determining your net cost of goods and then adding on an additional amount to meet your desired _____.",
                blanks: 1,
                options: [
                    "profit margin",
                    "sales quota",
                    "marketing budget",
                    "production cost"
                ],
                correctAnswer: "profit margin",
                explanation: "Pricing ensures the business is profitable after covering costs."
            },
            {
                id: 'MKTG_33',
                question: "Whether you have a brick-and-mortar store or an e-commerce platform relates to the '_____' P.",
                blanks: 1,
                options: [
                    "Place",
                    "Product",
                    "Price",
                    "Promotion"
                ],
                correctAnswer: "Place",
                explanation: "Place is about the channels and locations of distribution."
            },
            {
                id: 'MKTG_34',
                question: "Getting the word out about products is typically a mix of various marketing strategies under '_____' P.",
                blanks: 1,
                options: [
                    "Promotion",
                    "People",
                    "Process",
                    "Physical Evidence"
                ],
                correctAnswer: "Promotion",
                explanation: "Promotion encompasses all communication efforts to inform and persuade."
            },
            {
                id: 'MKTG_35',
                question: "Employees are considered part of the '_____' P in marketing.",
                blanks: 1,
                options: [
                    "People",
                    "Process",
                    "Physical Evidence",
                    "Place"
                ],
                correctAnswer: "People",
                explanation: "Employees are frontline representatives who influence customer experience."
            },
            {
                id: 'MKTG_36',
                question: "The procedures and systems for delivering the product to customers fall under the '_____' P.",
                blanks: 1,
                options: [
                    "Process",
                    "Product",
                    "Promotion",
                    "Price"
                ],
                correctAnswer: "Process",
                explanation: "Process defines how services are delivered and transactions occur."
            },
            {
                id: 'MKTG_37',
                question: "The tangible aspects that support a service or product, such as packaging, relate to '_____' P.",
                blanks: 1,
                options: [
                    "Physical Evidence",
                    "Place",
                    "People",
                    "Promotion"
                ],
                correctAnswer: "Physical Evidence",
                explanation: "Physical evidence provides tangible cues for intangible services."
            },
            {
                id: 'MKTG_38',
                question: "One of the earliest steps in marketing is to _____ what people want.",
                blanks: 1,
                options: [
                    "understand",
                    "dictate",
                    "ignore",
                    "suppress"
                ],
                correctAnswer: "understand",
                explanation: "Market research and customer insight are foundational to marketing."
            },
            {
                id: 'MKTG_39',
                question: "Marketing helps a business to set the right _____ for its product or service.",
                blanks: 1,
                options: [
                    "price",
                    "location",
                    "staff",
                    "packaging"
                ],
                correctAnswer: "price",
                explanation: "Pricing is a critical marketing decision that impacts sales and perception."
            },
            {
                id: 'MKTG_40',
                question: "Without effective marketing, even the best product may go _____.",
                blanks: 1,
                options: [
                    "unnoticed",
                    "viral",
                    "discounted",
                    "stagnant"
                ],
                correctAnswer: "unnoticed",
                explanation: "Marketing is essential for product visibility and market penetration."
            },

            // --- Material Selection Questions (15 questions) ---
            {
                id: 'MAT_1',
                question: "Material Selection is defined as choosing the best materials based on cost, performance, and _____.",
                blanks: 1,
                options: [
                    "sustainability",
                    "availability",
                    "color",
                    "size"
                ],
                correctAnswer: "sustainability",
                explanation: "Sustainability is an increasingly important factor in material selection."
            },
            {
                id: 'MAT_2',
                question: "A key factor to consider in material selection is the material's _____.",
                blanks: 1,
                options: [
                    "strength",
                    "weight",
                    "volume",
                    "texture"
                ],
                correctAnswer: "strength",
                explanation: "Strength ensures the product can withstand expected forces."
            },
            {
                id: 'MAT_3',
                question: "When selecting materials, _____ refers to how long the product will last.",
                blanks: 1,
                options: [
                    "durability",
                    "cost",
                    "aesthetics",
                    "safety"
                ],
                correctAnswer: "durability",
                explanation: "Durability is about a material's ability to resist wear and tear over time."
            },
            {
                id: 'MAT_4',
                question: "The financial aspect, or _____, is a major consideration in material selection.",
                blanks: 1,
                options: [
                    "cost",
                    "profit",
                    "revenue",
                    "expense"
                ],
                correctAnswer: "cost",
                explanation: "Material cost directly impacts the product's final price and profitability."
            },
            {
                id: 'MAT_5',
                question: "Considering the environmental impact of materials contributes to product _____.",
                blanks: 1,
                options: [
                    "sustainability",
                    "strength",
                    "cost",
                    "safety"
                ],
                correctAnswer: "sustainability",
                explanation: "Choosing eco-friendly materials supports sustainable practices."
            },
            {
                id: 'MAT_6',
                question: "The appearance of the material, or _____, is an important factor for consumer appeal.",
                blanks: 1,
                options: [
                    "aesthetics",
                    "function",
                    "price",
                    "durability"
                ],
                correctAnswer: "aesthetics",
                explanation: "Aesthetics relate to the visual appeal and feel of the material."
            },
            {
                id: 'MAT_7',
                question: "Ensuring that the material does not pose risks to users relates to the factor of _____.",
                blanks: 1,
                options: [
                    "safety",
                    "cost",
                    "strength",
                    "aesthetics"
                ],
                correctAnswer: "safety",
                explanation: "Safety is paramount to prevent harm to users during product use."
            },
            {
                id: 'MAT_8',
                question: "Proper material selection is crucial for optimal product _____.",
                blanks: 1,
                options: [
                    "performance",
                    "marketing",
                    "sales",
                    "promotion"
                ],
                correctAnswer: "performance",
                explanation: "The right materials ensure the product functions as intended."
            },
            {
                id: 'MAT_9',
                question: "One of the importances of material selection is its potential for cost _____.",
                blanks: 1,
                options: [
                    "reduction",
                    "increase",
                    "stabilization",
                    "doubling"
                ],
                correctAnswer: "reduction",
                explanation: "Optimized material choices can lead to lower production costs."
            },
            {
                id: 'MAT_10',
                question: "Material selection directly impacts the overall _____ of a product.",
                blanks: 1,
                options: [
                    "quality",
                    "color",
                    "size",
                    "shape"
                ],
                correctAnswer: "quality",
                explanation: "The inherent properties of materials contribute significantly to overall product quality."
            },
            {
                id: 'MAT_11',
                question: "The choice of materials can influence how easy a product is to _____.",
                blanks: 1,
                options: [
                    "manufacture",
                    "market",
                    "sell",
                    "advertise"
                ],
                correctAnswer: "manufacture",
                explanation: "Some materials are easier to process, cut, or mold, affecting manufacturing efficiency."
            },
            {
                id: 'MAT_12',
                question: "A material's resistance to wear and tear over time is known as its _____.",
                blanks: 1,
                options: [
                    "durability",
                    "elasticity",
                    "malleability",
                    "conductivity"
                ],
                correctAnswer: "durability",
                explanation: "Durability is essential for product longevity."
            },
            {
                id: 'MAT_13',
                question: "When a material needs to withstand heavy loads, its _____ is a primary consideration.",
                blanks: 1,
                options: [
                    "strength",
                    "flexibility",
                    "transparency",
                    "insulation"
                ],
                correctAnswer: "strength",
                explanation: "High strength is required for structural integrity."
            },
            {
                id: 'MAT_14',
                question: "Selecting materials that are easily recyclable or sourced responsibly contributes to product _____.",
                blanks: 1,
                options: [
                    "sustainability",
                    "complexity",
                    "fragility",
                    "innovation"
                ],
                correctAnswer: "sustainability",
                explanation: "Sustainability involves environmental and social responsibility in material sourcing and disposal."
            },
            {
                id: 'MAT_15',
                question: "The overall process of choosing suitable materials for a product is called Material _____.",
                blanks: 1,
                options: [
                    "Selection",
                    "Analysis",
                    "Testing",
                    "Design"
                ],
                correctAnswer: "Selection",
                explanation: "It's the deliberate choice of materials to meet product requirements."
            },

            // --- Quality Control Questions (25 questions) ---
            {
                id: 'QC_1',
                question: "_____ is defined as ensuring products meet standards and customer expectations before market release.",
                blanks: 1,
                options: [
                    "Quality Control",
                    "Production",
                    "Marketing",
                    "Material Selection"
                ],
                correctAnswer: "Quality Control",
                explanation: "Quality Control verifies that products adhere to specified quality levels."
            },
            {
                id: 'QC_2',
                question: "One method of Quality Control is _____ where products are examined for defects.",
                blanks: 1,
                options: [
                    "Inspection",
                    "Marketing",
                    "Selling",
                    "Designing"
                ],
                correctAnswer: "Inspection",
                explanation: "Inspection involves a thorough check of products or processes."
            },
            {
                id: 'QC_3',
                question: "Another method of quality control is _____, which checks product functionality.",
                blanks: 1,
                options: [
                    "Testing",
                    "Marketing",
                    "Advertising",
                    "Pricing"
                ],
                correctAnswer: "Testing",
                explanation: "Testing validates product performance against requirements."
            },
            {
                id: 'QC_4',
                question: "_____ involves selecting a subset of products to evaluate the quality of the entire batch.",
                blanks: 1,
                options: [
                    "Sampling",
                    "Total Quality Management",
                    "Six Sigma",
                    "ISO Standards"
                ],
                correctAnswer: "Sampling",
                explanation: "Sampling allows for efficient quality checks without inspecting every item."
            },
            {
                id: 'QC_5',
                question: "Using a _____ helps ensure all necessary checks are performed during quality control.",
                blanks: 1,
                options: [
                    "checklist",
                    "spreadsheet",
                    "calendar",
                    "report"
                ],
                correctAnswer: "checklist",
                explanation: "Checklists provide a structured way to confirm all steps are followed."
            },
            {
                id: 'QC_6',
                question: "One type of Quality Control is Statistical Quality Control, or _____.",
                blanks: 1,
                options: [
                    "SQC",
                    "TQM",
                    "ISO",
                    "Six Sigma"
                ],
                correctAnswer: "SQC",
                explanation: "Statistical Quality Control uses statistical methods to monitor and control quality."
            },
            {
                id: 'QC_7',
                question: "Total Quality Management (TQM) is a type of quality control that emphasizes continuous _____.",
                blanks: 1,
                options: [
                    "improvement",
                    "production",
                    "marketing",
                    "sales"
                ],
                correctAnswer: "improvement",
                explanation: "TQM is a holistic approach to continuous quality enhancement."
            },
            {
                id: 'QC_8',
                question: "Six Sigma is a methodology aimed at reducing _____ in manufacturing and business processes.",
                blanks: 1,
                options: [
                    "defects",
                    "costs",
                    "time",
                    "employees"
                ],
                correctAnswer: "defects",
                explanation: "Six Sigma seeks to minimize errors to near perfection."
            },
            {
                id: 'QC_9',
                question: "International standards for quality management are provided by _____ Standards.",
                blanks: 1,
                options: [
                    "ISO",
                    "ASTM",
                    "ANSI",
                    "DIN"
                ],
                correctAnswer: "ISO",
                explanation: "ISO standards are globally recognized benchmarks for quality."
            },
            {
                id: 'QC_10',
                question: "The importance of quality control includes reducing product _____.",
                blanks: 1,
                options: [
                    "defects",
                    "features",
                    "costs",
                    "time"
                ],
                correctAnswer: "defects",
                explanation: "Fewer defects mean higher quality and less waste."
            },
            {
                id: 'QC_11',
                question: "Effective quality control helps build customer _____ in a brand.",
                blanks: 1,
                options: [
                    "trust",
                    "disinterest",
                    "skepticism",
                    "complaints"
                ],
                correctAnswer: "trust",
                explanation: "Consistent quality fosters customer confidence."
            },
            {
                id: 'QC_12',
                question: "Quality control maintains product _____ over time.",
                blanks: 1,
                options: [
                    "consistency",
                    "variance",
                    "randomness",
                    "unpredictability"
                ],
                correctAnswer: "consistency",
                explanation: "It ensures products are uniform and reliable."
            },
            {
                id: 'QC_13',
                question: "A positive outcome of robust quality control is an improved company _____.",
                blanks: 1,
                options: [
                    "reputation",
                    "debt",
                    "overhead",
                    "tax"
                ],
                correctAnswer: "reputation",
                explanation: "High-quality products enhance a company's standing."
            },
            {
                id: 'QC_14',
                question: "Quality control ensures products meet specified _____ before release.",
                blanks: 1,
                options: [
                    "standards",
                    "budgets",
                    "deadlines",
                    "marketing goals"
                ],
                correctAnswer: "standards",
                explanation: "Compliance with quality benchmarks is the core function."
            },
            {
                id: 'QC_15',
                question: "The methods of quality control include inspection, testing, sampling, and using _____.",
                blanks: 1,
                options: [
                    "checklists",
                    "reports",
                    "surveys",
                    "meetings"
                ],
                correctAnswer: "checklists",
                explanation: "Checklists provide a systematic approach to quality verification."
            },
            {
                id: 'QC_16',
                question: "Statistical Quality Control uses _____ data to monitor and improve product quality.",
                blanks: 1,
                options: [
                    "numerical",
                    "qualitative",
                    "anecdotal",
                    "historical"
                ],
                correctAnswer: "numerical",
                explanation: "It relies on data and statistical analysis for process control."
            },
            {
                id: 'QC_17',
                question: "Total Quality Management (TQM) focuses on involving all employees in the quality _____ process.",
                blanks: 1,
                options: [
                    "improvement",
                    "inspection",
                    "testing",
                    "sampling"
                ],
                correctAnswer: "improvement",
                explanation: "TQM is a company-wide commitment to excellence."
            },
            {
                id: 'QC_18',
                question: "Six Sigma aims for extremely low levels of defects, typically measured in Defects Per Million _____ (DPMO).",
                blanks: 1,
                options: [
                    "Opportunities",
                    "Units",
                    "Processes",
                    "Inspections"
                ],
                correctAnswer: "Opportunities",
                explanation: "DPMO is a key metric in Six Sigma for measuring defect rates."
            },
            {
                id: 'QC_19',
                question: "The goal of Quality Control is to ensure products meet customer _____.",
                blanks: 1,
                options: [
                    "expectations",
                    "demands",
                    "budgets",
                    "preferences"
                ],
                correctAnswer: "expectations",
                explanation: "Meeting customer needs is a fundamental aspect of quality."
            },
            {
                id: 'QC_20',
                question: "By ensuring high quality, businesses can reduce rework and _____ costs.",
                blanks: 1,
                options: [
                    "warranty",
                    "marketing",
                    "production",
                    "development"
                ],
                correctAnswer: "warranty",
                explanation: "Fewer defects lead to fewer customer complaints and warranty claims."
            },
            {
                id: 'QC_21',
                question: "A consistent level of quality across all products helps build brand _____.",
                blanks: 1,
                options: [
                    "consistency",
                    "diversity",
                    "expansion",
                    "marketing"
                ],
                correctAnswer: "consistency",
                explanation: "Consistency reinforces brand image and reliability."
            },
            {
                id: 'QC_22',
                question: "Quality Control plays a critical role in preventing faulty products from reaching the _____.",
                blanks: 1,
                options: [
                    "market",
                    "factory",
                    "warehouse",
                    "design team"
                ],
                correctAnswer: "market",
                explanation: "It acts as a gatekeeper to protect consumers and the brand."
            },
            {
                id: 'QC_23',
                question: "For a new product, quality control checks are performed _____ its market release.",
                blanks: 1,
                options: [
                    "before",
                    "after",
                    "during",
                    "independently of"
                ],
                correctAnswer: "before",
                explanation: "Preventative quality control ensures readiness for launch."
            },
            {
                id: 'QC_24',
                question: "The application of _____ principles helps maintain high quality throughout the production process.",
                blanks: 1,
                options: [
                    "quality",
                    "marketing",
                    "sales",
                    "financial"
                ],
                correctAnswer: "quality",
                explanation: "Adhering to quality principles is integral to the process."
            },
            {
                id: 'QC_25',
                question: "ISO Standards provide a framework for organizations to implement effective quality management _____.",
                blanks: 1,
                options: [
                    "systems",
                    "departments",
                    "employees",
                    "products"
                ],
                correctAnswer: "systems",
                explanation: "ISO sets guidelines for a structured approach to quality management."
            },

            // --- SWOT Analysis Questions (25 questions) ---
            {
                id: 'SWOT_1',
                question: "SWOT analysis evaluates the strategic position of organizations by identifying internal and external factors that are _____ and _____ to achieving goals.",
                blanks: 2,
                options: [
                    "favorable, unfavorable",
                    "easy, difficult",
                    "common, rare",
                    "known, unknown"
                ],
                correctAnswer: "favorable, unfavorable",
                explanation: "SWOT looks at both positive and negative influences on an organization's objectives."
            },
            {
                id: 'SWOT_2',
                question: "The 'S' in SWOT stands for _____.",
                blanks: 1,
                options: [
                    "Strengths",
                    "Strategies",
                    "Solutions",
                    "Systems"
                ],
                correctAnswer: "Strengths",
                explanation: "Strengths are internal positive attributes."
            },
            {
                id: 'SWOT_3',
                question: "The 'W' in SWOT stands for _____.",
                blanks: 1,
                options: [
                    "Weaknesses",
                    "Wants",
                    "Workloads",
                    "Warnings"
                ],
                correctAnswer: "Weaknesses",
                explanation: "Weaknesses are internal negative attributes."
            },
            {
                id: 'SWOT_4',
                question: "The 'O' in SWOT stands for _____.",
                blanks: 1,
                options: [
                    "Opportunities",
                    "Operations",
                    "Objectives",
                    "Obstacles"
                ],
                correctAnswer: "Opportunities",
                explanation: "Opportunities are external positive factors."
            },
            {
                id: 'SWOT_5',
                question: "The 'T' in SWOT stands for _____.",
                blanks: 1,
                options: [
                    "Threats",
                    "Tasks",
                    "Teams",
                    "Timelines"
                ],
                correctAnswer: "Threats",
                explanation: "Threats are external negative factors."
            },
            {
                id: 'SWOT_6',
                question: "Internal factors in a SWOT analysis include Strengths and _____.",
                blanks: 1,
                options: [
                    "Weaknesses",
                    "Opportunities",
                    "Threats",
                    "Trends"
                ],
                correctAnswer: "Weaknesses",
                explanation: "Strengths and Weaknesses are intrinsic to the organization."
            },
            {
                id: 'SWOT_7',
                question: "External factors in a SWOT analysis include Opportunities and _____.",
                blanks: 1,
                options: [
                    "Threats",
                    "Strengths",
                    "Weaknesses",
                    "Resources"
                ],
                correctAnswer: "Threats",
                explanation: "Opportunities and Threats arise from the external environment."
            },
            {
                id: 'SWOT_8',
                question: "Characteristics of the business that give it an advantage over others are called _____.",
                blanks: 1,
                options: [
                    "Strengths",
                    "Weaknesses",
                    "Opportunities",
                    "Threats"
                ],
                correctAnswer: "Strengths",
                explanation: "Strengths are unique capabilities or resources."
            },
            {
                id: 'SWOT_9',
                question: "Characteristics that place the business at a disadvantage relative to others are called _____.",
                blanks: 1,
                options: [
                    "Weaknesses",
                    "Strengths",
                    "Opportunities",
                    "Threats"
                ],
                correctAnswer: "Weaknesses",
                explanation: "Weaknesses are areas where the business performs poorly or lacks resources."
            },
            {
                id: 'SWOT_10',
                question: "Elements in the environment that the business could exploit to its advantage are called _____.",
                blanks: 1,
                options: [
                    "Opportunities",
                    "Strengths",
                    "Weaknesses",
                    "Threats"
                ],
                correctAnswer: "Opportunities",
                explanation: "Opportunities are external factors that can be leveraged for growth."
            },
            {
                id: 'SWOT_11',
                question: "Elements in the environment that could cause trouble for the business are called _____.",
                blanks: 1,
                options: [
                    "Threats",
                    "Strengths",
                    "Weaknesses",
                    "Opportunities"
                ],
                correctAnswer: "Threats",
                explanation: "Threats are external challenges that can harm the business."
            },
            {
                id: 'SWOT_12',
                question: "A SWOT analysis helps a business see the good and _____ parts of its operations.",
                blanks: 1,
                options: [
                    "bad",
                    "simple",
                    "complex",
                    "hidden"
                ],
                correctAnswer: "bad",
                explanation: "It provides a balanced view of positive and negative aspects."
            },
            {
                id: 'SWOT_13',
                question: "SWOT analysis is often used in the preliminary stages of _____ processes.",
                blanks: 1,
                options: [
                    "decision-making",
                    "production",
                    "marketing",
                    "hiring"
                ],
                correctAnswer: "decision-making",
                explanation: "It provides foundational insights for strategic choices."
            },
            {
                id: 'SWOT_14',
                question: "An example of a Strength could be a strong _____ reputation.",
                blanks: 1,
                options: [
                    "brand",
                    "threat",
                    "economic downturn",
                    "competitor"
                ],
                correctAnswer: "brand",
                explanation: "A strong brand is an internal advantage."
            },
            {
                id: 'SWOT_15',
                question: "An example of a Weakness could be a high _____ structure.",
                blanks: 1,
                options: [
                    "cost",
                    "revenue",
                    "profit",
                    "sales"
                ],
                correctAnswer: "cost",
                explanation: "High costs are an internal limitation."
            },
            {
                id: 'SWOT_16',
                question: "A new market segment appearing is an example of an _____.",
                blanks: 1,
                options: [
                    "Opportunity",
                    "Threat",
                    "Strength",
                    "Weakness"
                ],
                correctAnswer: "Opportunity",
                explanation: "New markets present external chances for growth."
            },
            {
                id: 'SWOT_17',
                question: "Increased competition is an example of a _____.",
                blanks: 1,
                options: [
                    "Threat",
                    "Opportunity",
                    "Strength",
                    "Weakness"
                ],
                correctAnswer: "Threat",
                explanation: "Competitors pose external risks."
            },
            {
                id: 'SWOT_18',
                question: "SWOT analysis is designed to improve strategic planning and business _____.",
                blanks: 1,
                options: [
                    "decision-making",
                    "manufacturing",
                    "accounting",
                    "staffing"
                ],
                correctAnswer: "decision-making",
                explanation: "It helps in making informed strategic choices."
            },
            {
                id: 'SWOT_19',
                question: "SWOT assessments are found everywhere in business and _____ practice.",
                blanks: 1,
                options: [
                    "management",
                    "engineering",
                    "legal",
                    "medical"
                ],
                correctAnswer: "management",
                explanation: "It is a widely applied tool in business management."
            },
            {
                id: 'SWOT_20',
                question: "For business leaders, intelligent execution of SWOT can enhance their knowledge of the business _____.",
                blanks: 1,
                options: [
                    "environment",
                    "office",
                    "employees",
                    "products"
                ],
                correctAnswer: "environment",
                explanation: "It provides a clear picture of the internal and external landscape."
            },
            {
                id: 'SWOT_21',
                question: "SWOT analysis can help executives identify any potential _____ to their business.",
                blanks: 1,
                options: [
                    "threats",
                    "profits",
                    "successes",
                    "opportunities"
                ],
                correctAnswer: "threats",
                explanation: "It highlights external risks that could impact the organization."
            },
            {
                id: 'SWOT_22',
                question: "The Ghana 'Koko' seller example for Strengths refers to 'My koko is _____ than others!'",
                blanks: 1,
                options: [
                    "sweeter",
                    "cheaper",
                    "faster",
                    "bigger"
                ],
                correctAnswer: "sweeter",
                explanation: "This highlights a unique, positive internal characteristic."
            },
            {
                id: 'SWOT_23',
                question: "The Ghana 'Koko' seller example for Weaknesses refers to 'I don’t have a big _____.'",
                blanks: 1,
                options: [
                    "shop",
                    "customer base",
                    "supplier",
                    "advertisement"
                ],
                correctAnswer: "shop",
                explanation: "This indicates an internal limitation or disadvantage."
            },
            {
                id: 'SWOT_24',
                question: "The Ghana 'Koko' seller example for Opportunities refers to 'More people drink koko in _____.'",
                blanks: 1,
                options: [
                    "harmattan",
                    "summer",
                    "winter",
                    "rainy season"
                ],
                correctAnswer: "harmattan",
                explanation: "This is an external chance for growth, related to seasonal demand."
            },
            {
                id: 'SWOT_25',
                question: "The Ghana 'Koko' seller example for Threats refers to 'Another seller opened _____.'",
                blanks: 1,
                options: [
                    "nearby",
                    "far away",
                    "online",
                    "yesterday"
                ],
                correctAnswer: "nearby",
                explanation: "Increased competition from a new local seller poses an external risk."
            },

            // --- PESTLE Analysis Questions (25 questions) ---
            {
                id: 'PESTLE_1',
                question: "PESTLE analysis identifies and evaluates how Political, Economic, Social, Technological, Legal, and Environmental factors impact business _____.",
                blanks: 1,
                options: [
                    "operations",
                    "profits",
                    "employees",
                    "products"
                ],
                correctAnswer: "operations",
                explanation: "PESTLE examines macro-environmental influences on how a business runs."
            },
            {
                id: 'PESTLE_2',
                question: "The 'P' in PESTLE stands for _____.",
                blanks: 1,
                options: [
                    "Political",
                    "Process",
                    "Product",
                    "Price"
                ],
                correctAnswer: "Political",
                explanation: "Political factors relate to government influence and stability."
            },
            {
                id: 'PESTLE_3',
                question: "The 'E' in PESTLE stands for _____.",
                blanks: 1,
                options: [
                    "Economic",
                    "Environmental",
                    "Ethical",
                    "Efficiency"
                ],
                correctAnswer: "Economic",
                explanation: "Economic factors include inflation, interest rates, and purchasing power."
            },
            {
                id: 'PESTLE_4',
                question: "The 'S' in PESTLE stands for _____.",
                blanks: 1,
                options: [
                    "Social",
                    "Sales",
                    "Suppliers",
                    "Standards"
                ],
                correctAnswer: "Social",
                explanation: "Social factors cover cultural trends, demographics, and lifestyles."
            },
            {
                id: 'PESTLE_5',
                question: "The 'T' in PESTLE stands for _____.",
                blanks: 1,
                options: [
                    "Technological",
                    "Time",
                    "Tactics",
                    "Trust"
                ],
                correctAnswer: "Technological",
                explanation: "Technological factors involve innovation, R&D, and automation."
            },
            {
                id: 'PESTLE_6',
                question: "The 'L' in PESTLE stands for _____.",
                blanks: 1,
                options: [
                    "Legal",
                    "Leadership",
                    "Labor",
                    "Loyalty"
                ],
                correctAnswer: "Legal",
                explanation: "Legal factors include laws, regulations, and consumer protection."
            },
            {
                id: 'PESTLE_7',
                question: "The final 'E' in PESTLE stands for _____.",
                blanks: 1,
                options: [
                    "Environmental",
                    "Employees",
                    "Events",
                    "Exports"
                ],
                correctAnswer: "Environmental",
                explanation: "Environmental factors consider climate, sustainability, and ecological concerns."
            },
            {
                id: 'PESTLE_8',
                question: "Government rules and policies are examples of _____ factors in PESTLE analysis.",
                blanks: 1,
                options: [
                    "Political",
                    "Economic",
                    "Social",
                    "Legal"
                ],
                correctAnswer: "Political",
                explanation: "Government actions directly influence the political landscape for businesses."
            },
            {
                id: 'PESTLE_9',
                question: "Inflation and interest rates are key _____ factors.",
                blanks: 1,
                options: [
                    "Economic",
                    "Political",
                    "Social",
                    "Technological"
                ],
                correctAnswer: "Economic",
                explanation: "These directly affect purchasing power and business costs."
            },
            {
                id: 'PESTLE_10',
                question: "Cultural trends and demographics fall under _____ factors.",
                blanks: 1,
                options: [
                    "Social",
                    "Economic",
                    "Technological",
                    "Legal"
                ],
                correctAnswer: "Social",
                explanation: "Social factors reflect consumer behavior and societal values."
            },
            {
                id: 'PESTLE_11',
                question: "New technological innovations and automation are examples of _____ factors.",
                blanks: 1,
                options: [
                    "Technological",
                    "Political",
                    "Economic",
                    "Social"
                ],
                correctAnswer: "Technological",
                explanation: "Technological advancements can create new opportunities or threats."
            },
            {
                id: 'PESTLE_12',
                question: "Laws and regulations are integral to _____ factors in PESTLE.",
                blanks: 1,
                options: [
                    "Legal",
                    "Political",
                    "Economic",
                    "Social"
                ],
                correctAnswer: "Legal",
                explanation: "Legal factors ensure compliance and define operating boundaries."
            },
            {
                id: 'PESTLE_13',
                question: "Climate change and sustainability concerns are examples of _____ factors.",
                blanks: 1,
                options: [
                    "Environmental",
                    "Economic",
                    "Social",
                    "Technological"
                ],
                correctAnswer: "Environmental",
                explanation: "These relate to the natural world and ecological impact."
            },
            {
                id: 'PESTLE_14',
                question: "The strategic planning framework of PESTLE helps business and project managers in the _____ process.",
                blanks: 1,
                options: [
                    "decision-making",
                    "production",
                    "marketing",
                    "hiring"
                ],
                correctAnswer: "decision-making",
                explanation: "It provides a holistic view for informed strategic choices."
            },
            {
                id: 'PESTLE_15',
                question: "An example of an Economic factor for a Ghana Taxi Driver is 'Dollar is expensive _____.'",
                blanks: 1,
                options: [
                    "now",
                    "always",
                    "never",
                    "soon"
                ],
                correctAnswer: "now",
                explanation: "Currency fluctuations impact operational costs."
            },
            {
                id: 'PESTLE_16',
                question: "The Social factor for a Ghana Taxi Driver notes 'Everyone uses _____ now.'",
                blanks: 1,
                options: [
                    "Uber",
                    "Buses",
                    "Trains",
                    "Bikes"
                ],
                correctAnswer: "Uber",
                explanation: "This reflects a change in consumer preference and social behavior."
            },
            {
                id: 'PESTLE_17',
                question: "The Technological factor for a Ghana Taxi Driver is 'Electric cars are coming _____.'",
                blanks: 1,
                options: [
                    "soon",
                    "never",
                    "yesterday",
                    "slowly"
                ],
                correctAnswer: "soon",
                explanation: "Emerging technologies can disrupt existing business models."
            },
            {
                id: 'PESTLE_18',
                question: "For a Ghana Taxi Driver, 'Police check car papers' is an example of a _____ factor.",
                blanks: 1,
                options: [
                    "Legal",
                    "Political",
                    "Social",
                    "Economic"
                ],
                correctAnswer: "Legal",
                explanation: "This refers to compliance with laws and regulations."
            },
            {
                id: 'PESTLE_19',
                question: "For a Ghana Taxi Driver, 'Floods spoil the roads' is an example of an _____ factor.",
                blanks: 1,
                options: [
                    "Environmental",
                    "Economic",
                    "Social",
                    "Technological"
                ],
                correctAnswer: "Environmental",
                explanation: "Natural conditions can directly impact business operations."
            },
            {
                id: 'PESTLE_20',
                question: "PESTLE analysis helps businesses understand the external _____ environment.",
                blanks: 1,
                options: [
                    "macro",
                    "micro",
                    "internal",
                    "competitive"
                ],
                correctAnswer: "macro",
                explanation: "It looks at large-scale, external forces."
            },
            {
                id: 'PESTLE_21',
                question: "The 'P' in PESTLE can refer to changes in _____ stability.",
                blanks: 1,
                options: [
                    "government",
                    "economic",
                    "social",
                    "technological"
                ],
                correctAnswer: "government",
                explanation: "Political stability impacts business confidence and policy."
            },
            {
                id: 'PESTLE_22',
                question: "The 'E' in PESTLE can include factors like unemployment _____.",
                blanks: 1,
                options: [
                    "rates",
                    "benefits",
                    "numbers",
                    "policies"
                ],
                correctAnswer: "rates",
                explanation: "Unemployment rates affect consumer spending and labor availability."
            },
            {
                id: 'PESTLE_23',
                question: "The 'S' in PESTLE can involve shifts in consumer _____ and values.",
                blanks: 1,
                options: [
                    "lifestyles",
                    "budgets",
                    "regulations",
                    "technologies"
                ],
                correctAnswer: "lifestyles",
                explanation: "Societal trends influence product demand and marketing approaches."
            },
            {
                id: 'PESTLE_24',
                question: "The 'T' in PESTLE can relate to breakthroughs in research and _____.",
                blanks: 1,
                options: [
                    "development",
                    "marketing",
                    "finance",
                    "management"
                ],
                correctAnswer: "development",
                explanation: "Technological advancements often stem from R&D."
            },
            {
                id: 'PESTLE_25',
                question: "The 'L' in PESTLE includes considerations such as health and _____ laws.",
                blanks: 1,
                options: [
                    "safety",
                    "marketing",
                    "economic",
                    "social"
                ],
                correctAnswer: "safety",
                explanation: "Legal compliance often involves adhering to health and safety regulations."
            },

            // --- Differences: Production vs. Manufacturing (10 questions) ---
            {
                id: 'DIFF_PM_1',
                question: "_____ is a broader term that includes the creation of both goods and services, while _____ specifically refers to the production of physical goods using machinery.",
                blanks: 2,
                options: [
                    "Production, Manufacturing",
                    "Manufacturing, Production",
                    "Marketing, Production",
                    "Production, Quality Control"
                ],
                correctAnswer: "Production, Manufacturing",
                explanation: "Production is the general term; manufacturing is a specific type of production for physical goods."
            },
            {
                id: 'DIFF_PM_2',
                question: "The scope of Production is _____, including services, while Manufacturing's scope is _____ and focuses only on tangible products.",
                blanks: 2,
                options: [
                    "broad, narrow",
                    "narrow, broad",
                    "physical, conceptual",
                    "internal, external"
                ],
                correctAnswer: "broad, narrow",
                explanation: "Production covers a wider range of outputs than manufacturing."
            },
            {
                id: 'DIFF_PM_3',
                question: "Production methods can be manual, digital, or mechanical processes, whereas Manufacturing methods are primarily _____ and automated.",
                blanks: 1,
                options: [
                    "mechanical",
                    "manual",
                    "digital",
                    "human-centric"
                ],
                correctAnswer: "mechanical",
                explanation: "Manufacturing heavily relies on machines and automation."
            },
            {
                id: 'DIFF_PM_4',
                question: "The output of Production includes both goods and _____, while Manufacturing output is only tangible products.",
                blanks: 1,
                options: [
                    "services",
                    "strategies",
                    "data",
                    "ideas"
                ],
                correctAnswer: "services",
                explanation: "Production creates both physical and intangible outputs."
            },
            {
                id: 'DIFF_PM_5',
                question: "Education and farming are examples of _____, while car making and electronics are examples of _____.",
                blanks: 2,
                options: [
                    "Production, Manufacturing",
                    "Manufacturing, Production",
                    "Services, Goods",
                    "Tangible, Intangible"
                ],
                correctAnswer: "Production, Manufacturing",
                explanation: "Farming and education include service creation (Production); cars and electronics are physical (Manufacturing)."
            },
            {
                id: 'DIFF_PM_6',
                question: "Oil refining, which produces a physical good continuously, is an example of Production, but can also be considered a type of _____.",
                blanks: 1,
                options: [
                    "Manufacturing",
                    "Service",
                    "Marketing",
                    "Management"
                ],
                correctAnswer: "Manufacturing",
                explanation: "Oil refining transforms raw materials into a tangible product using continuous processes, fitting manufacturing."
            },
            {
                id: 'DIFF_PM_7',
                question: "The table highlights that Production involves combining _____ (raw materials, labor, machines), whereas Manufacturing focuses on converting raw materials using machines, tools, and labor.",
                blanks: 1,
                options: [
                    "resources",
                    "profits",
                    "strategies",
                    "customers"
                ],
                correctAnswer: "resources",
                explanation: "Resources are the fundamental inputs for any production."
            },
            {
                id: 'DIFF_PM_8',
                question: "Manufacturing typically involves more significant use of _____ and automation compared to the broader term of production.",
                blanks: 1,
                options: [
                    "machinery",
                    "manual labor",
                    "creative thinking",
                    "customer interaction"
                ],
                correctAnswer: "machinery",
                explanation: "The mechanical aspect is a defining characteristic of manufacturing."
            },
            {
                id: 'DIFF_PM_9',
                question: "When discussing output, Production can result in intangible creations, but Manufacturing specifically results in _____ creations.",
                blanks: 1,
                options: [
                    "tangible",
                    "intangible",
                    "conceptual",
                    "service-oriented"
                ],
                correctAnswer: "tangible",
                explanation: "Manufacturing produces physical, touchable products."
            },
            {
                id: 'DIFF_PM_10',
                question: "While both Production and Manufacturing create value, Manufacturing's value addition is primarily through the physical transformation of _____ materials.",
                blanks: 1,
                options: [
                    "raw",
                    "finished",
                    "processed",
                    "secondary"
                ],
                correctAnswer: "raw",
                explanation: "Manufacturing takes raw inputs and makes them into useful goods."
            },

            // --- Differences: SWOT vs. PESTLE Analysis (20 questions) ---
            {
                id: 'DIFF_SP_1',
                question: "SWOT Analysis evaluates both internal and external business factors, while PESTLE Analysis focuses on external _____ factors only.",
                blanks: 1,
                options: [
                    "macro-environment",
                    "micro-environment",
                    "internal",
                    "competitive"
                ],
                correctAnswer: "macro-environment",
                explanation: "PESTLE analyzes large-scale external forces."
            },
            {
                id: 'DIFF_SP_2',
                question: "SWOT focuses on Strengths, Weaknesses, Opportunities, and Threats, whereas PESTLE focuses on Political, Economic, Social, Technological, Legal, and _____ factors.",
                blanks: 1,
                options: [
                    "Environmental",
                    "Ethical",
                    "Employee",
                    "External"
                ],
                correctAnswer: "Environmental",
                explanation: "Environmental is the final factor in the PESTLE acronym."
            },
            {
                id: 'DIFF_SP_3',
                question: "SWOT Analysis considers both internal and external factors, but PESTLE Analysis considers _____ factors only.",
                blanks: 1,
                options: [
                    "External",
                    "Internal",
                    "Micro",
                    "Competitive"
                ],
                correctAnswer: "External",
                explanation: "PESTLE is exclusively focused on the broader outside environment."
            },
            {
                id: 'DIFF_SP_4',
                question: "SWOT analysis is commonly used for strategic planning and project evaluation, while PESTLE analysis is used for market research and _____ planning.",
                blanks: 1,
                options: [
                    "long-term",
                    "short-term",
                    "internal",
                    "operational"
                ],
                correctAnswer: "long-term",
                explanation: "PESTLE provides a broader, futuristic view for strategy."
            },
            {
                id: 'DIFF_SP_5',
                question: "The scope of SWOT analysis is narrower, typically at the business or project level, while PESTLE analysis has a _____ scope, at the industry or environment level.",
                blanks: 1,
                options: [
                    "broader",
                    "narrower",
                    "similar",
                    "undefined"
                ],
                correctAnswer: "broader",
                explanation: "PESTLE provides a wider lens on external forces."
            },
            {
                id: 'DIFF_SP_6',
                question: "SWOT helps formulate business strategies that leverage strengths and address weaknesses, which PESTLE analysis is totally _____ of.",
                blanks: 1,
                options: [
                    "ignorant",
                    "aware",
                    "inclusive",
                    "focused"
                ],
                correctAnswer: "ignorant",
                explanation: "PESTLE doesn't delve into a company's internal capabilities or shortcomings."
            },
            {
                id: 'DIFF_SP_7',
                question: "PESTLE analysis offers a broader view of the _____ environment.",
                blanks: 1,
                options: [
                    "external",
                    "internal",
                    "competitive",
                    "operational"
                ],
                correctAnswer: "external",
                explanation: "PESTLE is designed to analyze the macro-environmental landscape."
            },
            {
                id: 'DIFF_SP_8',
                question: "SWOT links a business's internal potential with its _____ environment.",
                blanks: 1,
                options: [
                    "external",
                    "internal",
                    "organizational",
                    "departmental"
                ],
                correctAnswer: "external",
                explanation: "SWOT connects internal capabilities with outside opportunities and threats."
            },
            {
                id: 'DIFF_SP_9',
                question: "The purpose of PESTLE is to analyze external _____ factors.",
                blanks: 1,
                options: [
                    "macro-environment",
                    "micro-environment",
                    "internal operations",
                    "competitive strategies"
                ],
                correctAnswer: "macro-environment",
                explanation: "It focuses on the big picture external influences."
            },
            {
                id: 'DIFF_SP_10',
                question: "SWOT Analysis is a tool used in the preliminary stages of _____ to identify favorable and unfavorable factors.",
                blanks: 1,
                options: [
                    "decision-making processes",
                    "marketing campaigns",
                    "production cycles",
                    "employee evaluations"
                ],
                correctAnswer: "decision-making processes",
                explanation: "It provides a foundational overview for strategic choices."
            },
            {
                id: 'DIFF_SP_11',
                question: "SWOT focuses on factors like 'What you do well' (Strengths) and 'What you do badly' (Weaknesses), which are _____ assessments.",
                blanks: 1,
                options: [
                    "internal",
                    "external",
                    "political",
                    "economic"
                ],
                correctAnswer: "internal",
                explanation: "These relate to the organization's intrinsic characteristics."
            },
            {
                id: 'DIFF_SP_12',
                question: "PESTLE's factors like 'Government rules' (Political) or 'New tech' (Technological) are always _____ in nature.",
                blanks: 1,
                options: [
                    "external",
                    "internal",
                    "financial",
                    "operational"
                ],
                correctAnswer: "external",
                explanation: "These influences come from outside the organization."
            },
            {
                id: 'DIFF_SP_13',
                question: "SWOT analysis can be applied to a specific business or a specific _____.",
                blanks: 1,
                options: [
                    "project",
                    "country",
                    "continent",
                    "global market"
                ],
                correctAnswer: "project",
                explanation: "Its scope is often confined to specific organizational initiatives."
            },
            {
                id: 'DIFF_SP_14',
                question: "PESTLE helps in understanding broad industry trends, such as how inflation (an Economic factor) affects the entire _____.",
                blanks: 1,
                options: [
                    "market",
                    "employee base",
                    "product line",
                    "marketing team"
                ],
                correctAnswer: "market",
                explanation: "Macro-economic factors impact the entire industry or economy."
            },
            {
                id: 'DIFF_SP_15',
                question: "While both tools offer valuable insights for decision-making, they view the world from a different _____.",
                blanks: 1,
                options: [
                    "perspective",
                    "angle",
                    "side",
                    "direction"
                ],
                correctAnswer: "perspective",
                explanation: "Their distinct focus areas provide complementary views."
            },
            {
                id: 'DIFF_SP_16',
                question: "SWOT is effective for a company to assess its own _____, which PESTLE doesn't directly analyze.",
                blanks: 1,
                options: [
                    "capabilities",
                    "regulations",
                    "climate",
                    "economy"
                ],
                correctAnswer: "capabilities",
                explanation: "SWOT delves into internal strengths and weaknesses."
            },
            {
                id: 'DIFF_SP_17',
                question: "PESTLE analysis helps identify external factors that might influence a business, regardless of its internal _____.",
                blanks: 1,
                options: [
                    "strengths",
                    "weaknesses",
                    "opportunities",
                    "threats"
                ],
                correctAnswer: "strengths", // or weaknesses
                explanation: "External factors affect all businesses in an environment, regardless of their internal state."
            },
            {
                id: 'DIFF_SP_18',
                question: "SWOT analysis is often used to map a company's _____ to external factors.",
                blanks: 1,
                options: [
                    "response",
                    "ignorance",
                    "creation",
                    "elimination"
                ],
                correctAnswer: "response",
                explanation: "It helps formulate strategies to react to external opportunities and threats."
            },
            {
                id: 'DIFF_SP_19',
                question: "A factor like 'More people drink koko in harmattan' is an external factor analyzed by both SWOT (as an Opportunity) and potentially PESTLE (as a _____ factor).",
                blanks: 1,
                options: [
                    "Social",
                    "Economic",
                    "Political",
                    "Technological"
                ],
                correctAnswer: "Social",
                explanation: "Changes in consumer preferences and habits are social factors."
            },
            {
                id: 'DIFF_SP_20',
                question: "The key distinction between SWOT and PESTLE lies in whether they evaluate factors originating from _____ or _____ the business.",
                blanks: 2,
                options: [
                    "inside, outside",
                    "before, after",
                    "physical, digital",
                    "production, marketing"
                ],
                correctAnswer: "inside, outside",
                explanation: "This is the core difference in their analytical focus."
            },

            // --- Additional Product Realization Questions (30 questions to reach 180 total) ---
            {
                id: 'PR_ADD_1',
                question: "The definition of Production emphasizes combining resources to satisfy human _____.",
                blanks: 1,
                options: [
                    "needs",
                    "wants",
                    "desires",
                    "demands"
                ],
                correctAnswer: "needs",
                explanation: "The ultimate goal of production is to fulfill human requirements for goods and services."
            },
            {
                id: 'PR_ADD_2',
                question: "A company that builds custom yachts for individual clients would typically use _____ production.",
                blanks: 1,
                options: [
                    "Job",
                    "Mass",
                    "Batch",
                    "Continuous"
                ],
                correctAnswer: "Job",
                explanation: "Custom, one-off items are characteristic of job production."
            },
            {
                id: 'PR_ADD_3',
                question: "The creation of services, like legal advice or medical care, falls under the broad definition of _____.",
                blanks: 1,
                options: [
                    "Production",
                    "Manufacturing",
                    "Marketing",
                    "Quality Control"
                ],
                correctAnswer: "Production",
                explanation: "Production encompasses both tangible goods and intangible services."
            },
            {
                id: 'PR_ADD_4',
                question: "One importance of Production is that it adds _____ to raw materials, transforming them into more useful forms.",
                blanks: 1,
                options: [
                    "value",
                    "cost",
                    "weight",
                    "volume"
                ],
                correctAnswer: "value",
                explanation: "Production increases the utility and worth of inputs."
            },
            {
                id: 'PR_ADD_5',
                question: "Manufacturing specifically deals with the transformation of raw materials into _____ goods.",
                blanks: 1,
                options: [
                    "physical",
                    "digital",
                    "conceptual",
                    "service-based"
                ],
                correctAnswer: "physical",
                explanation: "Manufacturing is limited to tangible products."
            },
            {
                id: 'PR_ADD_6',
                question: "A factory producing electronic components in large volumes using assembly lines would primarily employ _____ Manufacturing.",
                blanks: 1,
                options: [
                    "Repetitive",
                    "Job Shop",
                    "Batch",
                    "Discrete"
                ],
                correctAnswer: "Repetitive",
                explanation: "Repetitive manufacturing is characterized by standardized, high-volume production."
            },
            {
                id: 'PR_ADD_7',
                question: "An importance of Manufacturing is its role in enhancing innovation and _____ within an economy.",
                blanks: 1,
                options: [
                    "technology",
                    "socialization",
                    "political stability",
                    "environmental preservation"
                ],
                correctAnswer: "technology",
                explanation: "Manufacturing often drives technological advancements."
            },
            {
                id: 'PR_ADD_8',
                question: "Marketing's role in customer acquisition involves attracting customers and influencing their _____ to purchase.",
                blanks: 1,
                options: [
                    "decisions",
                    "opinions",
                    "feelings",
                    "behaviors"
                ],
                correctAnswer: "decisions",
                explanation: "Marketing aims to persuade potential buyers."
            },
            {
                id: 'PR_ADD_9',
                question: "The 'Place' P of marketing relates to the entire _____ of a product, from factory to consumer.",
                blanks: 1,
                options: [
                    "distribution channel",
                    "production line",
                    "advertising campaign",
                    "pricing strategy"
                ],
                correctAnswer: "distribution channel",
                explanation: "Place encompasses how products get to the end-user."
            },
            {
                id: 'PR_ADD_10',
                question: "In Material Selection, balancing cost, performance, and environmental impact leads to greater product _____.",
                blanks: 1,
                options: [
                    "sustainability",
                    "speed",
                    "complexity",
                    "size"
                ],
                correctAnswer: "sustainability",
                explanation: "Sustainable material choices are crucial for long-term viability and ecological responsibility."
            },
            {
                id: 'PR_ADD_11',
                question: "The ability of a material to withstand a certain level of stress without breaking refers to its _____.",
                blanks: 1,
                options: [
                    "strength",
                    "flexibility",
                    "conductivity",
                    "density"
                ],
                correctAnswer: "strength",
                explanation: "Strength is a fundamental mechanical property."
            },
            {
                id: 'PR_ADD_12',
                question: "Quality Control aims to reduce defects, build customer trust, and maintain product _____.",
                blanks: 1,
                options: [
                    "consistency",
                    "variation",
                    "novelty",
                    "innovation"
                ],
                correctAnswer: "consistency",
                explanation: "Consistency ensures reliable product performance and customer satisfaction."
            },
            {
                id: 'PR_ADD_13',
                question: "Implementing ISO Standards for quality management means adhering to international _____ for best practices.",
                blanks: 1,
                options: [
                    "benchmarks",
                    "rules",
                    "laws",
                    "mandates"
                ],
                correctAnswer: "benchmarks",
                explanation: "ISO standards are recognized worldwide for quality frameworks."
            },
            {
                id: 'PR_ADD_14',
                question: "A company's strong brand and loyal customer base are examples of _____ in a SWOT analysis.",
                blanks: 1,
                options: [
                    "Strengths",
                    "Opportunities",
                    "Weaknesses",
                    "Threats"
                ],
                correctAnswer: "Strengths",
                explanation: "These are internal positive attributes."
            },
            {
                id: 'PR_ADD_15',
                question: "New government regulations regarding environmental protection would be considered a _____ factor in PESTLE analysis.",
                blanks: 1,
                options: [
                    "Legal",
                    "Political",
                    "Environmental",
                    "Economic"
                ],
                correctAnswer: "Legal",
                explanation: "Regulations are binding laws that affect operations."
            },
            {
                id: 'PR_ADD_16',
                question: "A decline in consumer spending due to high unemployment rates is an example of an _____ factor in PESTLE analysis.",
                blanks: 1,
                options: [
                    "Economic",
                    "Social",
                    "Political",
                    "Legal"
                ],
                correctAnswer: "Economic",
                explanation: "Unemployment and spending power are economic indicators."
            },
            {
                id: 'PR_ADD_17',
                question: "The primary difference between Production and Manufacturing is that Production includes both goods and _____, while Manufacturing is only goods.",
                blanks: 1,
                options: [
                    "services",
                    "ideas",
                    "data",
                    "strategies"
                ],
                correctAnswer: "services",
                explanation: "This highlights the broader scope of production."
            },
            {
                id: 'PR_ADD_18',
                question: "SWOT analysis is internal and external, whereas PESTLE analysis is exclusively _____.",
                blanks: 1,
                options: [
                    "external",
                    "internal",
                    "financial",
                    "strategic"
                ],
                correctAnswer: "external",
                explanation: "PESTLE focuses on the macro-environment."
            },
            {
                id: 'PR_ADD_19',
                question: "The process of creating goods and services by combining resources is generally termed _____.",
                blanks: 1,
                options: [
                    "Production",
                    "Distribution",
                    "Consumption",
                    "Financing"
                ],
                correctAnswer: "Production",
                explanation: "This is the fundamental definition of production."
            },
            {
                id: 'PR_ADD_20',
                question: "Making a large quantity of identical items, like smartphones, is categorized as _____ production.",
                blanks: 1,
                options: [
                    "Mass",
                    "Job",
                    "Batch",
                    "Project-Based"
                ],
                correctAnswer: "Mass",
                explanation: "Mass production aims for high volume and standardization."
            },
            {
                id: 'PR_ADD_21',
                question: "The conversion of raw materials into finished physical goods using machines is the definition of _____.",
                blanks: 1,
                options: [
                    "Manufacturing",
                    "Production",
                    "Assembly",
                    "Processing"
                ],
                correctAnswer: "Manufacturing",
                explanation: "It's the specific industrial process of making tangible products."
            },
            {
                id: 'PR_ADD_22',
                question: "When a furniture maker creates a unique, custom-designed table, they are engaging in _____ Production.",
                blanks: 1,
                options: [
                    "Job",
                    "Batch",
                    "Mass",
                    "Continuous"
                ],
                correctAnswer: "Job",
                explanation: "Job production handles bespoke items."
            },
            {
                id: 'PR_ADD_23',
                question: "Marketing involves understanding what people want, creating the right product, setting the right price, promoting it, selling it in the right place, and keeping customers _____.",
                blanks: 1,
                options: [
                    "happy",
                    "informed",
                    "aware",
                    "loyal"
                ],
                correctAnswer: "happy",
                explanation: "Customer satisfaction is key to retention."
            },
            {
                id: 'PR_ADD_24',
                question: "A company’s strong brand reputation and experienced workforce are considered _____ in a SWOT analysis.",
                blanks: 1,
                options: [
                    "Strengths",
                    "Weaknesses",
                    "Opportunities",
                    "Threats"
                ],
                correctAnswer: "Strengths",
                explanation: "These are internal positive attributes that give an advantage."
            },
            {
                id: 'PR_ADD_25',
                question: "The introduction of new automation technologies would be analyzed as a _____ factor in PESTLE analysis.",
                blanks: 1,
                options: [
                    "Technological",
                    "Economic",
                    "Social",
                    "Environmental"
                ],
                correctAnswer: "Technological",
                explanation: "Technological advancements affect how businesses operate and compete."
            },
            {
                id: 'PR_ADD_26',
                question: "The choice of materials affects a product's performance, cost, sustainability, safety, and _____.",
                blanks: 1,
                options: [
                    "aesthetics",
                    "marketing",
                    "sales",
                    "distribution"
                ],
                correctAnswer: "aesthetics",
                explanation: "Appearance is a critical factor for consumer appeal."
            },
            {
                id: 'PR_ADD_27',
                question: "Ensuring products meet customer expectations before release is the core purpose of _____.",
                blanks: 1,
                options: [
                    "Quality Control",
                    "Product Launch",
                    "Market Research",
                    "Sales Strategy"
                ],
                correctAnswer: "Quality Control",
                explanation: "QC ensures that output meets predefined standards."
            },
            {
                id: 'PR_ADD_28',
                question: "Philanthropic responsibility in CSR involves a business contributing resources to the community and engaging in _____ activities.",
                blanks: 1,
                options: [
                    "charitable",
                    "marketing",
                    "sales",
                    "production"
                ],
                correctAnswer: "charitable",
                explanation: "Philanthropy is about giving back to society through donations and community involvement."
            },
            {
                id: 'PR_ADD_29',
                question: "The process of attracting a pool of qualified candidates for job vacancies is called _____.",
                blanks: 1,
                options: [
                    "Recruitment",
                    "Selection",
                    "Training",
                    "Performance Management"
                ],
                correctAnswer: "Recruitment",
                explanation: "Recruitment focuses on drawing in potential employees."
            },
            {
                id: 'PR_ADD_30',
                question: "When a small business adheres to minimum wage and labor laws, it is fulfilling its _____ obligations.",
                blanks: 1,
                options: [
                    "ethical",
                    "financial",
                    "marketing",
                    "operational"
                ],
                correctAnswer: "ethical",
                explanation: "Fair pay and legal compliance are ethical responsibilities."
            }
        ];

        let questionsToAsk = [];
        let currentQuestionIndex = 0;
        let score = 0;
        const totalQuestionsPerSession = 20; // Changed to 20 questions per session
        let userName = "Guest";
        let challengedSharerName = null;
        let challengedSharerScore = null;
        let challengedSharerAvgSpeed = null;
        let challengedSharerProficiency = null;
        let timerInterval;
        let timeLeft = 35; // Changed to 35 seconds
        let questionStartTime;
        let totalTimeTaken = 0;
        let wrongAnswersLog = [];

        // --- DOM Elements ---
        const startScreen = document.getElementById('start-screen');
        const userNameInput = document.getElementById('user-name-input');
        const challengeIntroScreen = document.getElementById('challenge-intro-screen');
        const challengerNameDisplay = document.getElementById('challenger-name-display');
        const challengerScoreDisplay = document.getElementById('challenger-score-display');
        const challengerTotalDisplay = document.getElementById('challenger-total-display');
        const challengerSpeedDisplay = document.getElementById('challenger-speed-display');
        const challengerProficiencyDisplay = document.getElementById('challenger-proficiency-display');
        const challengerNameInput = document.getElementById('challenger-name-input');
        const startChallengeButton = document.getElementById('start-challenge-button');
        const quizScreen = document.getElementById('quiz-screen');
        const scoreCard = document.getElementById('score-card');
        const startButton = document.getElementById('start-button');
        const restartButton = document.getElementById('restart-button');
        const questionText = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        const questionCountDisplay = document.getElementById('question-count');
        const timerText = document.getElementById('timer-text');
        const timerBar = document.getElementById('timer-bar');
        const scoreTextEl = document.getElementById('score-text');
        const scoreReview = document.getElementById('score-review');
        const scoreIconDisplay = document.getElementById('score-icon-display');
        const quizAppContainer = document.getElementById('quiz-app');
        const shareWhatsappButton = document.getElementById('share-whatsapp');
        const shareFacebookButton = document.getElementById('share-facebook');
        const sharePinterestButton = document.getElementById('share-pinterest');
        const shareTeamsButton = document.getElementById('share-teams');
        const shareSection = document.getElementById('share-section');
        const challengeOutcomeMessage = document.getElementById('challenge-outcome-message');
        const averageSpeedDisplay = document.getElementById('average-speed-display');
        const proficiencyScoreDisplay = document.getElementById('proficiency-score-display');
        const reviewAnswersButton = document.getElementById('review-answers-button');
        const wrongAnswersModal = document.getElementById('wrong-answers-modal');
        const wrongAnswersList = document.getElementById('wrong-answers-list');

        // New Guide Modal DOM elements
        const guideModal = document.getElementById('guide-modal');
        const demoFillButton = document.getElementById('demo-fill-button');
        const demoBlankText = document.getElementById('demo-blank-text');
        const closeGuideButton = document.getElementById('close-guide-button');


        // --- SVG Icons for score card ---
        const scoreIcons = {
            trophy: `<svg class="score-icon text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 001.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>`,
            medal: `<svg class="score-icon text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>`,
            star: `<svg class="score-icon text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`,
            brain: `<svg class="score-icon text-pink-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5a5.5 5.5 0 00-5.5 5.5c0 1.258.468 2.41 1.25 3.317V17.5a.5.5 0 00.5.5h7.5a.5.5 0 00.5-.5v-5.183c.782-.907 1.25-2.06 1.25-3.317A5.5 5.5 0 0010 3.5zM8.5 12.5a.5.5 0 01-.5-.5V11a.5.5 0 011 0v1a.5.5 0 01-.5.5zm3 0a.5.5 0 01-.5-.5V11a.5.5 0 011 0v1a.5.5 0 01-.5.5z"></path><path d="M10 2a1 1 0 00-1 1v.5a.5.5 0 001 0V3a1 1 0 00-1-1z"></path></svg>`,
            book: `<svg class="score-icon text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 11-2 0V4a1 1 0 00-1-1H7a1 1 0 00-1 1v12a1 1 0 11-2 0V4z" clip-rule="evenodd"></path></svg>`
        };

        // --- Utility Functions ---
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function showModalMessage(message) {
            const modal = document.createElement('div');
            modal.classList.add('fixed', 'inset-0', 'bg-gray-800', 'bg-opacity-75', 'flex', 'items-center', 'justify-center', 'z-50', 'p-4', 'modal-overlay');
            modal.innerHTML = `
                <div class="bg-white p-6 rounded-lg shadow-xl text-center max-w-sm mx-auto modal-content">
                    <p class="text-lg font-semibold mb-4">${message}</p>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onclick="this.parentNode.parentNode.remove()">OK</button>
                </div>
            `;
            document.body.appendChild(modal);
        }

        // Function to get color based on percentage for dashboard
        function getScoreColor(percentage) {
            if (percentage >= 90) return 'text-green-600';
            if (percentage >= 75) return 'text-lime-600';
            if (percentage >= 50) return 'text-yellow-600';
            if (percentage >= 25) return 'text-orange-600';
            return 'text-red-600';
        }

        // --- Quiz Flow Functions ---
        function startGame(isChallenge = false) {
            let nameInputSource = isChallenge ? challengerNameInput : userNameInput;
            userName = nameInputSource.value.trim();

            if (!userName) {
                showModalMessage("Please enter your name to start the quiz!");
                return;
            }
            if (userName.length > 30) {
                showModalMessage("Name cannot exceed 30 characters.");
                return;
            }

            currentQuestionIndex = 0;
            score = 0;
            totalTimeTaken = 0;
            wrongAnswersLog = [];

            shuffleArray(allQuestions);
            questionsToAsk = allQuestions.slice(0, totalQuestionsPerSession);

            startScreen.classList.add('hidden');
            challengeIntroScreen.classList.add('hidden');
            scoreCard.classList.add('hidden');
            quizScreen.classList.remove('hidden');
            // quizAppContainer.classList.add('show'); // No need to re-add, it's always there

            displayQuestion();
        }

        function startTimer() {
            clearInterval(timerInterval);
            timeLeft = 35; // Set timer to 35 seconds
            questionStartTime = Date.now();
            
            timerText.textContent = `Time: ${timeLeft}s`;
            timerBar.style.width = '100%';
            timerBar.classList.remove('time-low-pulse', 'bg-red-500');
            timerBar.classList.add('bg-gradient-to-r', 'from-indigo-500', 'to-blue-500');


            timerInterval = setInterval(() => {
                timeLeft--;
                timerText.textContent = `Time: ${timeLeft}s`;
                const percentageLeft = (timeLeft / 35) * 100; // Calculate percentage based on 35s
                timerBar.style.width = `${percentageLeft}%`;

                if (timeLeft <= 5 && !timerBar.classList.contains('time-low-pulse')) {
                    timerBar.classList.remove('bg-gradient-to-r', 'from-indigo-500', 'to-blue-500');
                    timerBar.classList.add('time-low-pulse', 'bg-red-500');
                }

                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    handleTimeout();
                }
            }, 1000);
        }
        
        function handleTimeout() {
            const timeTaken = (Date.now() - questionStartTime) / 1000;
            totalTimeTaken += timeTaken;

            const questionData = questionsToAsk[currentQuestionIndex];
            wrongAnswersLog.push({
                question: questionData.question,
                userAnswer: "Timed Out / No Answer",
                correctAnswer: questionData.correctAnswer,
                explanation: questionData.explanation
            });

            disableOptions(null);
            moveToNextQuestion();
        }

        function disableOptions(selectedButton) {
            const buttons = optionsContainer.querySelectorAll('.option-button');
            const correctAnswerText = questionsToAsk[currentQuestionIndex].correctAnswer;

            buttons.forEach(button => {
                button.classList.add('disabled', 'opacity-70');
                button.onclick = null;
                
                if (button.textContent === correctAnswerText) {
                    button.classList.add('correct');
                } else if (button === selectedButton) {
                    button.classList.add('incorrect');
                }
            });
        }

        function moveToNextQuestion() {
            // Fade out current question and options
            questionText.style.opacity = '0';
            optionsContainer.style.opacity = '0';

            setTimeout(() => {
                currentQuestionIndex++;
                displayQuestion();
            }, 1500); // Wait 1.5 seconds before showing the next question
        }

        function displayQuestion() {
            if (currentQuestionIndex < totalQuestionsPerSession) {
                startTimer();
                const question = questionsToAsk[currentQuestionIndex];
                
                const shuffledOptions = [...question.options];
                shuffleArray(shuffledOptions);

                // Render question with blanks
                questionText.innerHTML = ''; // Clear previous content
                const parts = question.question.split('_____');
                const fragment = document.createDocumentFragment();

                parts.forEach((part, index) => {
                    const textSpan = document.createElement('span');
                    textSpan.textContent = part;
                    fragment.appendChild(textSpan);

                    if (index < question.blanks) {
                        const blankSpan = document.createElement('span');
                        blankSpan.classList.add('blank-placeholder');
                        blankSpan.textContent = '____'; // Placeholder text
                        fragment.appendChild(blankSpan);
                    }
                });
                questionText.appendChild(fragment);

                // Render options
                optionsContainer.innerHTML = '';
                shuffledOptions.forEach(optionText => {
                    const button = document.createElement('button');
                    button.classList.add('option-button');
                    button.textContent = optionText;
                    button.onclick = () => selectAnswer(button);
                    optionsContainer.appendChild(button);
                });

                questionCountDisplay.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestionsPerSession}`;

                // Fade in new question and options
                questionText.style.transition = 'opacity 0.5s ease-in-out';
                optionsContainer.style.transition = 'opacity 0.5s ease-in-out';
                questionText.style.opacity = '1';
                optionsContainer.style.opacity = '1';
            } else {
                showScoreCard();
            }
        }
        
        function selectAnswer(selectedButton) {
            clearInterval(timerInterval);
            
            const timeTaken = (Date.now() - questionStartTime) / 1000;
            totalTimeTaken += timeTaken;

            const questionData = questionsToAsk[currentQuestionIndex];
            const correctAnswerText = questionData.correctAnswer;
            const isCorrect = selectedButton.textContent === correctAnswerText;

            // Animate words into blanks
            const blankPlaceholders = questionText.querySelectorAll('.blank-placeholder');
            const wordsToFill = selectedButton.textContent.split(',').map(word => word.trim());

            blankPlaceholders.forEach((blank, index) => {
                if (wordsToFill[index]) {
                    blank.textContent = wordsToFill[index];
                }
            });

            if (isCorrect) {
                score++;
            } else {
                wrongAnswersLog.push({
                    question: questionData.question,
                    userAnswer: selectedButton.textContent,
                    correctAnswer: questionData.correctAnswer,
                    explanation: questionData.explanation
                });
            }
            disableOptions(selectedButton);
            
            moveToNextQuestion();
        }

        function showScoreCard() {
            quizScreen.classList.add('hidden');
            scoreCard.classList.remove('hidden');
            scoreCard.classList.add('show');
            shareSection.classList.remove('hidden');

            const scorePercentage = (score / totalQuestionsPerSession) * 100;
            const averageSpeed = totalQuestionsPerSession > 0 ? (totalTimeTaken / totalQuestionsPerSession).toFixed(2) : 0;
            const proficiencyScore = scorePercentage;

            scoreTextEl.textContent = `${userName}, you scored ${score} out of ${totalQuestionsPerSession}!`;
            averageSpeedDisplay.textContent = `Average Speed: ${averageSpeed} seconds per question`;
            proficiencyScoreDisplay.textContent = `Knowledge Proficiency: ${proficiencyScore.toFixed(0)}%`;
            proficiencyScoreDisplay.className = `text-lg font-bold mb-4 ${getScoreColor(proficiencyScore)}`;


            let reviewMessage = '';
            let iconSvg = '';

            if (scorePercentage === 100) {
                reviewMessage = "Flawless Victory! You've mastered the material. You're ready for any challenge!";
                iconSvg = scoreIcons.trophy;
            } else if (scorePercentage >= 90) {
                reviewMessage = "Outstanding! You have an expert-level grasp of these topics. Well done!";
                iconSvg = scoreIcons.medal;
            } else if (scorePercentage >= 75) {
                reviewMessage = "Excellent work! Your knowledge is impressive. Keep up the great momentum!";
                iconSvg = scoreIcons.star;
            } else if (scorePercentage >= 50) {
                reviewMessage = "Good job! You're on the right track. A little more practice and you'll be an expert.";
                iconSvg = scoreIcons.brain;
            } else {
                reviewMessage = "Nice try! This was great practice. Keep reviewing the topics to be fully prepared for the real test on paper.";
                iconSvg = scoreIcons.book;
            }

            scoreReview.textContent = reviewMessage;
            scoreIconDisplay.innerHTML = iconSvg;

            if (challengedSharerName && challengedSharerScore !== null) {
                handleChallengeOutcome(averageSpeed, proficiencyScore);
            }
        }
        
        function handleChallengeOutcome(myAvgSpeed, myProficiency) {
            shareSection.classList.add('hidden');
            challengeOutcomeMessage.classList.remove('hidden');
            let outcomeText = "";
            
            if (score > challengedSharerScore) {
                outcomeText = `🎉 Congratulations! You beat ${challengedSharerName}'s score of ${challengedSharerScore}!`;
            } else if (score === challengedSharerScore) {
                if (myAvgSpeed < challengedSharerAvgSpeed) {
                    outcomeText = `🚀 Amazing! You matched ${challengedSharerName}'s score of ${challengedSharerScore} AND were faster!`;
                } else if (myProficiency > challengedSharerProficiency) {
                     outcomeText = `🧠 Fantastic! You matched ${challengedSharerName}'s score of ${challengedSharerScore} and showed higher proficiency!`;
                }
                else if (myAvgSpeed === challengedSharerAvgSpeed && myProficiency === challengedSharerProficiency) {
                    outcomeText = `🤝 You matched ${challengedSharerName}'s score of ${challengedSharerScore} and speed! A true competitor!`;
                } else {
                    outcomeText = `🤝 You matched ${challengedSharerName}'s score of ${challengedSharerScore}!`;
                }
            } else {
                outcomeText = `Keep going! You didn't beat ${challengedSharerName}'s score of ${challengedSharerScore} this time.`;
            }
            challengeOutcomeMessage.textContent = outcomeText;
            
            // Clear challenge specific variables after outcome is displayed
            challengedSharerName = null;
            challengedSharerScore = null;
            challengedSharerAvgSpeed = null;
            challengedSharerProficiency = null;
            challengerSpeedDisplay.textContent = "";
            challengerProficiencyDisplay.textContent = "";
            challengerTotalDisplay.textContent = ""; // Clear total questions display
        }

        function resetQuiz() {
            scoreCard.classList.remove('show');
            // quizAppContainer.classList.remove('show'); // No need to remove, it's always there
            
            setTimeout(() => {
                userNameInput.value = "";
                challengerNameInput.value = "";
                startScreen.classList.remove('hidden');
                challengeIntroScreen.classList.add('hidden');
                quizScreen.classList.add('hidden');
                scoreCard.classList.add('hidden');
                challengeOutcomeMessage.classList.add('hidden');
                averageSpeedDisplay.textContent = ""; 
                proficiencyScoreDisplay.textContent = ""; 
                proficiencyScoreDisplay.classList.remove('text-red-600', 'text-orange-600', 'text-yellow-600', 'text-lime-600', 'text-green-600');
                proficiencyScoreDisplay.classList.add('text-lg', 'font-bold', 'mb-4');
                
                // quizAppContainer.classList.add('show'); // No need to re-add, it's always there
            }, 500);
        }

        // --- Share Functions ---
        function getShareUrl() {
            const currentAvgSpeed = totalQuestionsPerSession > 0 ? (totalTimeTaken / totalQuestionsPerSession).toFixed(2) : 0;
            const currentProficiency = (score / totalQuestionsPerSession) * 100;

            const params = new URLSearchParams();
            params.set('cn', encodeURIComponent(userName)); // Challenger Name (cn)
            params.set('cs', score); // Challenger Score (cs)
            params.set('ct', totalQuestionsPerSession); // Challenger Total Questions (ct)
            params.set('ca', currentAvgSpeed); // Challenger Average Speed (ca)
            params.set('cp', currentProficiency.toFixed(0)); // Challenger Proficiency

            // For wrong answers, due to URL length limits, we will not embed the full log
            // Instead, the review button provides the review on the current session.
            // If a user clicks a challenge link, they start fresh.
            
            return `${window.location.origin}${window.location.pathname}?${params.toString()}`;
        }

        function getShareText() {
            const currentProficiency = (score / totalQuestionsPerSession) * 100;
            let achievement = "";
            if (currentProficiency === 100) achievement = "a perfect score";
            else if (currentProficiency >= 90) achievement = "an outstanding score";
            else if (currentProficiency >= 75) achievement = "an excellent score";
            else if (currentProficiency >= 50) achievement = "a good score";
            else achievement = "a solid score";

            return encodeURIComponent(`${userName} achieved ${achievement} (${score}/${totalQuestionsPerSession}) on the Product Realization Exam Prep Quiz! Think you can beat my score?`);
        }
        
        function setupShareListeners() {
            const shareButtons = [
                { el: shareWhatsappButton, getUrl: () => `https://wa.me/?text=${getShareText()}%0A${encodeURIComponent(getShareUrl())}` },
                { el: shareFacebookButton, getUrl: () => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl())}&quote=${getShareText()}` },
                { el: sharePinterestButton, getUrl: () => `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(getShareUrl())}&description=${getShareText()}` },
                { el: shareTeamsButton, getUrl: () => `https://teams.microsoft.com/share?msgText=${getShareText()}&mask=false&href=${encodeURIComponent(getShareUrl())}` }
            ];
            shareButtons.forEach(btn => {
                btn.el.onclick = () => {
                    window.open(btn.getUrl(), '_blank');
                };
            });
        }

        // --- Challenge Logic ---
        function checkChallengeInUrl() {
            const urlParams = new URLSearchParams(window.location.search);
            
            const name = urlParams.get('cn'); // Challenger Name (cn)
            const scoreParam = urlParams.get('cs'); // Challenger Score (cs)
            const totalParam = urlParams.get('ct'); // Challenger Total Questions (ct)
            const speedParam = urlParams.get('ca'); // Challenger Average Speed (ca)
            const proficiencyParam = urlParams.get('cp'); // Challenger Proficiency (cp)

            if (name && scoreParam !== null && totalParam !== null && speedParam !== null && proficiencyParam !== null) {
                challengedSharerName = decodeURIComponent(name);
                challengedSharerScore = parseInt(scoreParam);
                challengedSharerAvgSpeed = parseFloat(speedParam);
                challengedSharerProficiency = parseFloat(proficiencyParam);

                startScreen.classList.add('hidden');
                challengeIntroScreen.classList.remove('hidden');
                // quizAppContainer.classList.add('show'); // Already visible
                
                challengerNameDisplay.textContent = challengedSharerName;
                challengerScoreDisplay.textContent = challengedSharerScore;
                challengerTotalDisplay.textContent = totalParam; // Display total questions challenged on
                
                challengerScoreDisplay.classList.add(getScoreColor((challengedSharerScore / parseInt(totalParam)) * 100));

                challengerSpeedDisplay.textContent = `Average Speed: ${challengedSharerAvgSpeed} seconds/question`;
                challengerProficiencyDisplay.textContent = `Knowledge Proficiency: ${challengedSharerProficiency}%`;
                challengerProficiencyDisplay.classList.add(getScoreColor(challengedSharerProficiency));
                
            } else {
                startScreen.classList.remove('hidden');
                challengeIntroScreen.classList.add('hidden'); // Ensure hidden if not a challenge
                // quizAppContainer.classList.add('show'); // Already visible
            }
        }

        // --- Wrong Answers Review Modal Functions ---
        function showWrongAnswersModal() {
            wrongAnswersList.innerHTML = ''; // Clear previous content

            if (wrongAnswersLog.length === 0) {
                wrongAnswersList.innerHTML = '<p class="text-gray-600 text-center">Great job! You answered all questions correctly or within the time limit!</p>';
            } else {
                wrongAnswersLog.forEach((item, index) => {
                    const div = document.createElement('div');
                    div.classList.add('mb-4', 'p-4', 'border', 'rounded-lg', 'bg-red-50', 'text-left', 'border-red-200');
                    div.innerHTML = `
                        <p class="font-semibold text-gray-800 mb-2">Question ${index + 1}: ${item.question.replace(/_____/g, '____')}</p>
                        <p class="text-red-600 mb-1"><i class="fas fa-times-circle mr-2"></i>Your Answer: <span class="font-medium">${item.userAnswer}</span></p>
                        <p class="text-green-600"><i class="fas fa-check-circle mr-2"></i>Correct Answer: <span class="font-medium">${item.correctAnswer}</span></p>
                        ${item.explanation ? `<p class="text-sm text-gray-500 mt-2">Explanation: ${item.explanation}</p>` : ''}
                    `;
                    wrongAnswersList.appendChild(div);
                });
            }
            wrongAnswersModal.classList.remove('hidden');
        }

        // --- Guide Modal Functions (New) ---
        function showGuide() {
            guideModal.classList.remove('hidden');
            // quizAppContainer.classList.add('hidden'); // REMOVED: Do not hide the main app
            // Initialize demo blank
            demoBlankText.textContent = '____';
            demoBlankText.classList.remove('filled'); // Ensure it's not filled initially
        }

        function closeGuide() {
            localStorage.setItem(QUIZ_GUIDE_SHOWN_KEY, 'true');
            guideModal.classList.add('hidden');
            // quizAppContainer.classList.remove('hidden'); // REMOVED: No need to show, it's always visible
            
            // The checkChallengeInUrl already sets the correct initial screen (start or challenge)
            // so we just need to ensure the quizAppContainer is set to 'show'
            // quizAppContainer.classList.add('show'); // Already visible
        }

        // --- Event Listeners ---
        window.addEventListener('load', () => {
            checkChallengeInUrl(); // Check for challenge params first and set initial screen state
            setupShareListeners();

            // If guide has not been shown, display it
            if (localStorage.getItem(QUIZ_GUIDE_SHOWN_KEY) !== 'true') {
                showGuide();
            }
            // The quizAppContainer is already visible by default, and checkChallengeInUrl
            // handles which sub-screen (start or challenge) is active.
        });

        startButton.addEventListener('click', () => startGame(false));
        startChallengeButton.addEventListener('click', () => startGame(true));
        restartButton.addEventListener('click', resetQuiz);
        reviewAnswersButton.addEventListener('click', showWrongAnswersModal);

        // Guide modal event listeners
        demoFillButton.addEventListener('click', () => {
            if (demoBlankText.textContent === '____') {
                demoBlankText.textContent = 'FILLED';
                demoBlankText.classList.add('filled');
            } else {
                demoBlankText.textContent = '____'; // Reset for re-demo
                demoBlankText.classList.remove('filled');
            }
        });
        closeGuideButton.addEventListener('click', closeGuide);

