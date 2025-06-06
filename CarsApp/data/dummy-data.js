import Category from "../models/category";
import Car from "../models/car";

export const CATEGORIES = [
  new Category("c1", "EV", "#4a7c59"),
  new Category("c2", "Hybrid", "#6b8e23"),
  new Category("c3", "SUV ", "#8b4513"),
  new Category("c4", "Sports Car", "#cd853f"),
  new Category("c5", "Luxury Car", "#b8860b"),
  new Category("c6", "Collectible", "#708090"),
  new Category("c7", "Sedan", "#4682b4"),
  new Category("c8", "Pickup", "#556b2f"),
  new Category("c9", "Crossover", "#5f9ea0"),
  new Category("c10", "Convertible", "#9acd32")
];

{
  /*


*/
}

export const CARS = [
  new Car(
    "c1",
    ["c1"],
    "Tesla Model 3",
    "expensive",
    "advanced",
    "https://hips.hearstapps.com/hmg-prod/images/2024-tesla-model-3-long-range-rwd-132-66feb663ecf17.jpg?crop=0.704xw:0.594xh;0.143xw,0.392xh&resize=2048:*",
    2024,
    [
      "Electric Motor: Dual motor AWD",
      "Battery: 75-82 kWh lithium-ion",
      "Range: 341-405 miles EPA",
      "Charging: Supercharger V3 compatible",
      "Autopilot: Enhanced Autopilot with FSD capability",
      "Interior: Minimalist design with 15.4-inch touchscreen"
    ],
    [
      "Revolutionary electric sedan that redefined the automotive industry with continuous improvements.",
      "Features over-the-air software updates that continuously improve performance and add new features.",
      "Enhanced Autopilot system provides advanced driver assistance with full self-driving potential.",
      "Minimalist interior focuses on a large central touchscreen for all controls and entertainment.",
      "Access to Tesla's extensive Supercharger network for fast charging nationwide.",
      "Industry-leading safety ratings with 5-star rating in all categories from NHTSA.",
      "Made in USA (Fremont, California) and China (Shanghai) with global production capability."
    ],
    true,
    true,
    false,
    true
  ),

  new Car(
    "c2",
    ["c2", "c7"],
    "Toyota Prius",
    "affordable",
    "simple",
    "https://rpmweb.ca/medias/Toyota-Prius-2025-1.jpg",
    2025,
    [
      "Engine: 2.0L 4-cylinder with electric motor",
      "Transmission: eCVT",
      "Fuel Economy: 57 city / 54 highway / 56 combined MPG",
      "Hybrid System: Toyota Hybrid System II",
      "Safety: Toyota Safety Sense 3.0",
      "Cargo: 27.4 cubic feet"
    ],
    [
      "Fifth-generation pioneer of mass-market hybrid technology with bold new design language.",
      "Outstanding fuel economy makes it ideal for daily commuting and long-distance travel.",
      "Proven reliability with many examples exceeding 200,000+ miles of trouble-free service.",
      "Completely redesigned with more engaging styling and improved interior space.",
      "Comprehensive safety suite comes standard across all trim levels for peace of mind.",
      "Low maintenance costs and strong resale value provide excellent ownership experience.",
      "Made in Japan with Toyota's legendary build quality and hybrid expertise."
    ],
    false,
    true,
    true,
    false
  ),

  new Car(
    "c3",
    ["c3"],
    "Ford Explorer",
    "moderate",
    "simple",
    "https://pictures.dealer.com/s/stevemarshfordfd/1234/8994c7996b6d481cb5d9e3a6685ae692.jpg",
    2025,
    [
      "Engine: 2.3L EcoBoost Turbo 4-cylinder",
      "Transmission: 10-speed SelectShift automatic",
      "Seating: Up to 7 passengers in three rows",
      "Cargo: 18.2-87.8 cubic feet",
      "Towing: Up to 5,600 lbs capacity",
      "Drive: Intelligent AWD available"
    ],
    [
      "America's best-selling three-row SUV for decades, perfect for families and adventures.",
      "Three rows of seating provide flexible passenger and cargo configurations for any need.",
      "EcoBoost engine delivers strong performance while maintaining reasonable fuel economy.",
      "Intelligent AWD system automatically adjusts power distribution for optimal traction.",
      "Generous towing capacity handles boats, trailers, and recreational equipment with ease.",
      "Advanced SYNC 4A infotainment system with wireless connectivity and smartphone integration.",
      "Built in Chicago, Illinois with American craftsmanship and engineering excellence."
    ],
    false,
    false,
    true,
    true
  ),

  new Car(
    "c4",
    ["c4"],
    "Porsche 911",
    "luxurious",
    "challenging",
    "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2024/Products/992-II/0840_nevada_coupe_u-crane_AKOS0607_edit_V03-sky.jpg/jcr:content/0840_nevada_coupe_u-crane_AKOS0607_edit_V03-sky.jpg",
    2025,
    [
      "Engine: 3.0L twin-turbo flat-6",
      "Power: 379-650+ horsepower depending on variant",
      "Transmission: 7-speed manual or 8-speed PDK",
      "Layout: Rear-engine, RWD/AWD available",
      "Top Speed: 182-205+ mph",
      "Acceleration: 0-60 mph in 2.6-4.0 seconds"
    ],
    [
      "Iconic sports car that has evolved continuously while maintaining its essential character and DNA.",
      "Unique rear-engine layout provides distinctive handling characteristics and exceptional traction.",
      "Available in numerous variants from base Carrera to track-focused GT and Turbo models.",
      "Precision engineering delivers both daily usability and track-day performance capability.",
      "Timeless design language that remains instantly recognizable across all generations.",
      "Exceptional build quality and reliability for a high-performance sports car of this caliber.",
      "Hand-built in Stuttgart, Germany with meticulous attention to detail and craftsmanship."
    ],
    false,
    false,
    false,
    true
  ),

  new Car(
    "c5",
    ["c5", "c7"],
    "Mercedes-Benz S-Class",
    "luxurious",
    "advanced",
    "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2022/07/2022-Mercedes-Benz-S-Class.jpeg",
    2025,
    [
      "Engine: 3.0L inline-6 turbo with 48V mild hybrid",
      "Interior: Nappa leather with massage and ventilated seats",
      "Technology: MBUX Hyperscreen with AI assistance",
      "Safety: Advanced driver assistance systems with active steering",
      "Comfort: AIRMATIC air suspension with curve tilting",
      "Sound: Burmester 4D surround sound system"
    ],
    [
      "Flagship luxury sedan that showcases Mercedes-Benz's most advanced technologies and innovations.",
      "Opulent interior features premium materials and cutting-edge comfort systems throughout.",
      "MBUX AI system learns driver preferences and provides intuitive voice interaction.",
      "Advanced safety systems often debut in S-Class before filtering to other Mercedes models.",
      "Air suspension with curve tilting function enhances both comfort and dynamic handling.",
      "Whisper-quiet cabin creates a serene environment for all passengers.",
      "Crafted in Sindelfingen, Germany with the highest standards of luxury and quality."
    ],
    true,
    false,
    false,
    false
  ),

  new Car(
    "c6",
    ["c6", "c4"],
    "1967 Ford Mustang",
    "collectible",
    "classic",
    "https://cdn.dealeraccelerate.com/noreserve/1/588/11955/1920x1440/1967-ford-mustang",
    1967,
    [
      "Engine: 289 or 390 cubic inch V8",
      "Transmission: 3-speed automatic or 4-speed manual",
      "Body Style: Fastback, convertible, or coupe",
      "Production: First generation (1964.5-1973)",
      "Cultural Impact: Pony car revolution",
      "Collectibility: Highly sought after classic"
    ],
    [
      'Iconic American muscle car that launched the "pony car" segment in the 1960s.',
      "Available in multiple body styles with various engine options from inline-6 to big-block V8.",
      "Cultural phenomenon that appeared in countless movies and became a symbol of American freedom.",
      "Fastback model particularly desirable among collectors for its aggressive styling.",
      "Affordable performance car that made sports car thrills accessible to average buyers.",
      "Values have appreciated significantly, with pristine examples commanding premium prices.",
      "Built in Dearborn, Michigan during the golden age of American automotive design."
    ],
    false,
    false,
    false,
    true
  ),

  new Car(
    "c7",
    ["c7"],
    "Honda Accord",
    "affordable",
    "simple",
    "https://alcf.s3.us-west-1.amazonaws.com/_custom/2025/honda/accord/2025_honda_accord_sedan_touring-hybrid_fq_oem_1_1600x1067.jpg",
    2025,
    [
      "Engine: 1.5L turbo 4-cylinder or 2.0L turbo",
      "Transmission: CVT or 10-speed automatic",
      "Fuel Economy: 32-38 city / 42-48 highway MPG",
      "Safety: Honda Sensing suite standard",
      "Interior: Spacious cabin with premium soft-touch materials",
      "Reliability: Proven track record with excellent ratings"
    ],
    [
      "Midsize sedan that consistently ranks among America's best-selling cars for reliability.",
      "Spacious interior rivals larger vehicles while maintaining excellent fuel economy ratings.",
      "Honda's reputation for reliability means many Accords exceed 200,000 miles easily.",
      "Available hybrid powertrain delivers exceptional efficiency without compromising performance.",
      "Honda Sensing safety suite comes standard, providing comprehensive peace of mind.",
      "Strong resale value makes it an excellent long-term investment for families.",
      "Manufactured in Marysville, Ohio with Honda's commitment to quality and durability."
    ],
    true,
    true,
    true,
    false
  ),

  new Car(
    "c8",
    ["c8"],
    "Ford F-150",
    "moderate",
    "rugged",
    "https://images.jazelc.com/uploads/futurefordofsacramento-m2en/2025-Ford-F-150-Raptor-R-Dust.jpg",
    2025,
    [
      "Engine: 3.3L V6 to 5.0L V8, plus PowerBoost hybrid",
      "Towing: Up to 14,000 lbs capacity",
      "Payload: Up to 3,325 lbs maximum",
      "Bed Options: 5.5, 6.5, or 8-foot bed lengths",
      "Drive: 4WD available with terrain management modes",
      "Technology: SYNC 4A with 12-inch touchscreen"
    ],
    [
      "America's best-selling truck for over four decades, defining the pickup truck segment.",
      "Multiple engine options provide the right balance of power and efficiency for any job.",
      "Exceptional towing capacity handles everything from boats to construction equipment safely.",
      "Available in multiple configurations from regular cab to crew cab with various bed lengths.",
      "4WD system with terrain management modes conquers any work site or adventure terrain.",
      "Advanced technology integrates seamlessly with tools and productivity apps for work.",
      "Built tough in Dearborn, Michigan and Kansas City, Missouri with American pride."
    ],
    false,
    false,
    true,
    true
  ),

  new Car(
    "c9",
    ["c9", "c3"],
    "Toyota RAV4",
    "moderate",
    "simple",
    "https://i.gaw.to/vehicles/photos/40/36/403618-2024-toyota-rav4.jpg?1024x640",
    2025,
    [
      "Engine: 2.5L 4-cylinder with AWD standard",
      "Ground Clearance: 8.6 inches for off-road capability",
      "Cargo: 37.5-69.8 cubic feet of storage space",
      "Fuel Economy: 28-35 city / 32-38 highway MPG",
      "Safety: Toyota Safety Sense 3.0 standard",
      "Hybrid: Available with 40+ MPG rating"
    ],
    [
      "Compact crossover that pioneered the segment and remains one of America's most popular choices.",
      "Standard all-wheel drive provides confidence in various weather and terrain conditions.",
      "Right-sized for urban environments while offering SUV versatility and capability.",
      "Excellent reliability record with low maintenance costs and strong resale value.",
      "Hybrid variant delivers exceptional fuel economy without sacrificing functionality or space.",
      "Comprehensive safety features come standard across all trim levels for protection.",
      "Built in Georgetown, Kentucky and Woodstock, Ontario with Toyota quality standards."
    ],
    true,
    true,
    true,
    true
  ),

  new Car(
    "c10",
    ["c10", "c4"],
    "BMW Z4",
    "expensive",
    "sporty",
    "https://www.thedrive.com/wp-content/uploads/2024/09/2025-bmw-z4-m40i-2.jpg?quality=85",
    2025,
    [
      "Engine: 2.0L turbo 4-cylinder or 3.0L turbo inline-6",
      "Transmission: 8-speed Steptronic automatic",
      "Roof: Power-folding soft top operation",
      "Drive: Rear-wheel drive with perfect balance",
      "Performance: 0-60 mph in 3.9-5.2 seconds",
      "Weight Distribution: 50/50 front/rear balance"
    ],
    [
      "Premium roadster that combines open-air driving excitement with BMW's sporting DNA.",
      "Power-folding soft top can be operated at speeds up to 31 mph for quick transitions.",
      "Perfect 50/50 weight distribution provides balanced handling and driving dynamics.",
      "Available engines range from efficient turbo-4 to powerful inline-6 options.",
      "Premium interior features high-quality materials and intuitive iDrive 8.5 system.",
      "Ideal for weekend drives and scenic routes where the journey is the destination.",
      "Developed jointly with Toyota Supra, built in Graz, Austria with European precision."
    ],
    false,
    false,
    false,
    true
  ),

  // NEW CARS ADDED BELOW

  new Car(
    "c11",
    ["c4"],
    "2025 Corvette ZR1",
    "luxurious",
    "challenging",
    "https://hips.hearstapps.com/hmg-prod/images/2025-chevrolet-corvette-zr-1-1809-68309389318ba.jpg?crop=0.813xw:0.686xh;0.146xw,0.245xh&resize=980:*",
    2025,
    [
      "Engine: 5.5L twin-turbocharged V8 LT7",
      "Power: 1,064 horsepower at 7,000 RPM",
      "Torque: 828 lb-ft at 6,000 RPM",
      "Transmission: 8-speed dual-clutch automatic",
      "Top Speed: 233 mph on track",
      "Acceleration: 0-60 mph in 2.3 seconds"
    ],
    [
      "Most powerful production Corvette ever built with unprecedented performance capabilities.",
      "Twin-turbocharged V8 engine delivers hypercar-level power in an American package.",
      "Generates over 1,200 pounds of downforce at top speed for incredible stability.",
      "Features iconic split rear window design paying homage to classic Corvette heritage.",
      "Advanced aerodynamics and cooling systems enable sustained high-performance driving.",
      "Carbon fiber construction throughout reduces weight while increasing structural rigidity.",
      "Hand-assembled in Bowling Green, Kentucky with meticulous attention to detail."
    ],
    false,
    false,
    false,
    true
  ),

  new Car(
    "c12",
    ["c7"],
    "Toyota Corolla",
    "affordable",
    "simple",
    "https://imgcdn.zigwheels.us/large/gallery/exterior/9/74/toyota-corolla-front-angle-low-view-714307.jpg",
    2025,
    [
      "Engine: 2.0L Dynamic Force 4-cylinder",
      "Power: 169 horsepower",
      "Transmission: CVT automatic",
      "Fuel Economy: 32 city / 41 highway / 35 combined MPG",
      "Safety: Toyota Safety Sense 3.0 standard",
      "Interior: 13.1 cubic feet trunk space"
    ],
    [
      "Compact sedan offering exceptional value with Toyota's renowned reliability and efficiency.",
      "Dynamic Force engine provides smooth power delivery with excellent fuel economy ratings.",
      "Spacious interior offers comfortable seating for five adults with quality materials.",
      "Comprehensive safety suite includes pre-collision system and lane departure alert.",
      "Low cost of ownership with affordable maintenance and strong resale value.",
      "Available in multiple trim levels to suit different budgets and preferences.",
      "Built with Toyota's commitment to quality and long-term durability."
    ],
    true,
    true,
    true,
    false
  ),

  new Car(
    "c13",
    ["c7"],
    "Toyota Camry",
    "moderate",
    "simple",
    "https://hips.hearstapps.com/hmg-prod/images/2025-toyota-camry-xse-awd-123-66993cc94cc40.jpg",
    2025,
    [
      "Engine: 2.5L 4-cylinder or 3.5L V6",
      "Power: 203-301 horsepower",
      "Transmission: 8-speed automatic",
      "Fuel Economy: 28-39 city / 35-41 highway MPG",
      "Safety: Toyota Safety Sense 3.0 suite",
      "Interior: 15.1 cubic feet trunk capacity"
    ],
    [
      "Midsize sedan that combines style, performance, and efficiency in one attractive package.",
      "Available with efficient 4-cylinder or powerful V6 engine options for different needs.",
      "Spacious interior provides comfortable seating for five with premium material options.",
      "Advanced safety systems come standard across all trim levels for peace of mind.",
      "Strong reliability record and excellent resale value make it a smart long-term choice.",
      "Sporty styling and handling make it more engaging than typical family sedans.",
      "Manufactured in Georgetown, Kentucky with Toyota's quality manufacturing standards."
    ],
    true,
    true,
    true,
    false
  ),

  new Car(
    "c14",
    ["c4", "c5", "c6"],
    "Mercedes AMG SLS Black Series",
    "luxurious",
    "challenging",
    "https://www.topgear.com/sites/default/files/images/news-article/carousel/2018/08/77f051548250a5fc223feba74518cb8d/2014_mercedes-benz_sls_amg_black_series_0005.jpg",
    2014,
    [
      "Engine: 6.2L naturally aspirated V8 AMG",
      "Power: 622 horsepower",
      "Torque: 468 lb-ft",
      "Transmission: 7-speed dual-clutch AMG SPEEDSHIFT",
      "Top Speed: 196 mph electronically limited",
      "Acceleration: 0-60 mph in 3.5 seconds"
    ],
    [
      "Ultimate expression of Mercedes-AMG engineering with track-focused performance capabilities.",
      "Naturally aspirated V8 engine delivers incredible sound and linear power delivery.",
      "Extensive use of carbon fiber and weight reduction creates pure driving experience.",
      "Limited production makes it highly collectible among automotive enthusiasts.",
      "Gullwing doors and aggressive styling create unmistakable road presence.",
      "Track-tuned suspension and aerodynamics provide exceptional handling precision.",
      "Hand-built in Affalterbach, Germany by AMG's master craftsmen with racing heritage."
    ],
    false,
    false,
    false,
    true
  ),

  new Car(
    "c15",
    ["c4"],
    "Porsche 911 GT3 RS",
    "luxurious",
    "challenging",
    "https://m.media-amazon.com/images/I/91IkIzfjcgL.jpg",
    2024,
    [
      "Engine: 4.0L naturally aspirated flat-6",
      "Power: 518 horsepower at 8,500 RPM",
      "Transmission: 7-speed PDK only",
      "Weight: 3,268 lbs (lightweight construction)",
      "Top Speed: 184 mph",
      "Acceleration: 0-60 mph in 3.0 seconds"
    ],
    [
      "Track-bred 911 variant that represents the pinnacle of naturally aspirated performance.",
      "Motorsport-derived engine revs to 9,000 RPM with incredible sound and response.",
      "Extensive aerodynamics package generates significant downforce for track stability.",
      "Weight-saving measures include magnesium roof and carbon fiber body panels.",
      "Race-tuned suspension and chassis setup provide uncompromising track performance.",
      "Limited production ensures exclusivity among serious driving enthusiasts.",
      "Built in Stuttgart, Germany with racing heritage and track-focused engineering."
    ],
    false,
    false,
    false,
    true
  ),

  new Car(
    "c16",
    ["c3"],
    "Toyota Sequoia",
    "expensive",
    "rugged",
    "https://ecoloauto.com/wp-content/uploads/2023-Toyota-Sequoia-TRD-Pro-8872-1024x683.jpg",
    2025,
    [
      "Engine: 3.5L twin-turbo V6 hybrid (i-FORCE MAX)",
      "Power: 437 horsepower combined",
      "Transmission: 10-speed automatic",
      "Towing: Up to 9,520 lbs capacity",
      "Seating: Up to 8 passengers in three rows",
      "Drive: Available 4WD with Multi-Terrain Select"
    ],
    [
      "Full-size SUV offering maximum capability for large families and heavy-duty needs.",
      "Hybrid powertrain combines strong performance with improved fuel efficiency.",
      "Three rows of seating provide spacious accommodation for up to eight passengers.",
      "Exceptional towing capacity handles large boats, RVs, and heavy trailers.",
      "4WD system with terrain modes tackles challenging off-road conditions confidently.",
      "Premium interior features and technology rival luxury SUV competitors.",
      "Built in Princeton, Indiana with Toyota's commitment to durability and reliability."
    ],
    false,
    false,
    true,
    true
  ),

  new Car(
    "c17",
    ["c8"],
    "Toyota Tacoma TRD Pro",
    "expensive",
    "rugged",
    "https://cimg3.ibsrv.net/ibimg/hgm/1920x1080-1/100/953/2025-toyota-tacoma_100953203.jpg",
    2025,
    [
      "Engine: 2.4L turbo 4-cylinder with hybrid assist",
      "Power: 278 horsepower combined",
      "Transmission: 8-speed automatic",
      "Drive: Part-time 4WD with locking differentials",
      "Suspension: Fox Racing Shocks with remote reservoirs",
      "Towing: Up to 6,500 lbs capacity"
    ],
    [
      "Off-road focused pickup truck designed for serious trail adventures and work capability.",
      "TRD Pro package includes specialized suspension, skid plates, and all-terrain tires.",
      "Hybrid powertrain provides strong torque delivery and improved fuel efficiency.",
      "Advanced 4WD system with crawl control tackles the most challenging terrain.",
      "Durable construction and proven reliability handle demanding work and play environments.",
      "Distinctive TRD Pro styling and badging set it apart from standard Tacoma models.",
      "Built in San Antonio, Texas with Toyota's truck manufacturing expertise."
    ],
    false,
    false,
    true,
    true
  ),

  new Car(
    "c18",
    ["c4", "c5", "c7"],
    "Audi RS7",
    "luxurious",
    "challenging",
    "https://4kwallpapers.com/images/wallpapers/abt-rs7-legacy-2560x1440-12295.jpg",
    2024,
    [
      "Engine: 4.0L twin-turbo V8 with mild hybrid",
      "Power: 591 horsepower",
      "Torque: 590 lb-ft",
      "Transmission: 8-speed tiptronic automatic",
      "Drive: Quattro all-wheel drive",
      "Acceleration: 0-60 mph in 3.5 seconds"
    ],
    [
      "High-performance luxury sedan combining sportback elegance with supercar capabilities.",
      "Twin-turbo V8 engine delivers incredible acceleration with refined daily drivability.",
      "Quattro all-wheel drive system provides exceptional traction in all conditions.",
      "Luxurious interior features premium materials and advanced technology throughout.",
      "Adaptive air suspension balances comfort and performance depending on driving mode.",
      "Distinctive sportback design combines coupe styling with sedan practicality.",
      "Built in Neckarsulm, Germany with Audi's commitment to luxury and performance."
    ],
    false,
    false,
    false,
    true
  ),

  new Car(
    "c19",
    ["c1", "c4", "c7"],
    "Porsche Taycan Turbo S",
    "luxurious",
    "challenging",
    "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2024/03/porsche-taycan.png",
    2025,
    [
      "Motor: Dual electric motors with overboost",
      "Power: 750 horsepower with launch control",
      "Battery: 93.4 kWh lithium-ion",
      "Range: 282 miles EPA estimated",
      "Charging: 800V architecture with fast charging",
      "Acceleration: 0-60 mph in 2.6 seconds"
    ],
    [
      "Electric luxury sedan that combines Porsche's sporting heritage with zero-emission performance.",
      "Dual-motor setup delivers instant torque and incredible acceleration capabilities.",
      "800-volt electrical architecture enables ultra-fast charging speeds up to 270 kW.",
      "Luxurious interior features premium materials and advanced Porsche Communication Management.",
      "Sport Chrono package with launch control maximizes performance potential.",
      "Precise handling and steering feel maintain Porsche's legendary driving dynamics.",
      "Built in Stuttgart, Germany with Porsche's commitment to performance and innovation."
    ],
    true,
    false,
    false,
    true
  ),

  new Car(
    "c20",
    ["c4", "c7"],
    "Volkswagen Golf GTI",
    "moderate",
    "sporty",
    "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/03/872568-21.jpg",
    2025,
    [
      "Engine: 2.0L turbo 4-cylinder EA888",
      "Power: 241 horsepower",
      "Transmission: 6-speed manual or 7-speed DSG",
      "Drive: Front-wheel drive with electronic differential",
      "Suspension: Independent multi-link rear",
      "Brakes: Performance brakes with red calipers"
    ],
    [
      "Legendary hot hatch that defined the affordable performance car segment for generations.",
      "Turbocharged engine provides strong acceleration with excellent fuel efficiency.",
      "Choice of manual or dual-clutch automatic transmission caters to driving preferences.",
      "Precise handling and steering make it incredibly engaging on twisty roads.",
      "Practical hatchback design combines performance with everyday usability.",
      "Rich heritage and enthusiast following make it an icon among car enthusiasts.",
      "Built in Wolfsburg, Germany with Volkswagen's commitment to driving dynamics."
    ],
    false,
    false,
    false,
    true
  ),

  new Car(
    "c21",
    ["c5", "c7"],
    "Mercedes E63 AMG Wagon",
    "luxurious",
    "challenging",
    "https://www.cnet.com/a/img/resize/2e623d10cfed775b12aec66223906a87955b802d/hub/2017/02/02/72ed574e-119d-4227-9158-5c05e65ff7ea/2018-mercedes-amg-e63-s-wagon-9.jpg?auto=webp&width=1200",
    2024,
    [
      "Engine: 4.0L twin-turbo V8 AMG",
      "Power: 603 horsepower",
      "Torque: 627 lb-ft",
      "Transmission: 9-speed AMG SPEEDSHIFT",
      "Drive: 4MATIC+ all-wheel drive",
      "Acceleration: 0-60 mph in 3.4 seconds"
    ],
    [
      "Ultimate performance wagon combining supercar acceleration with family practicality.",
      "Twin-turbo V8 AMG engine delivers incredible power with sophisticated refinement.",
      "4MATIC+ all-wheel drive system provides exceptional traction and stability.",
      "Spacious wagon body offers generous cargo capacity for family adventures.",
      "Luxurious interior features premium materials and advanced AMG-specific technology.",
      "Rare combination of performance, luxury, and practicality in one unique package.",
      "Hand-built by AMG in Affalterbach, Germany with racing-derived engineering."
    ],
    false,
    false,
    false,
    true
  ),

  new Car(
    "c22",
    ["c1", "c3"],
    "Tesla Model X",
    "luxurious",
    "advanced",
    "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/09/screenshot-2024-09-26-07-06-21-1.png",
    2024,
    [
      "Motor: Dual or tri-motor electric powertrain",
      "Power: 670-1,020 horsepower",
      "Battery: 100 kWh lithium-ion",
      "Range: 348-516 miles EPA",
      "Seating: Up to 7 passengers with falcon wing doors",
      "Towing: Up to 5,000 lbs capacity"
    ],
    [
      "Luxury electric SUV featuring distinctive falcon wing doors and cutting-edge technology.",
      "Tri-motor Plaid variant delivers hypercar-level acceleration in an SUV package.",
      "Falcon wing doors provide unique access to second and third-row seating.",
      "Advanced autopilot capabilities with full self-driving potential for the future.",
      "Spacious interior accommodates up to seven passengers with premium materials.",
      "Access to Tesla's Supercharger network for convenient long-distance travel.",
      "Built in Fremont, California with Tesla's commitment to sustainable transportation."
    ],
    true,
    false,
    true,
    true
  ),

  new Car(
    "c23",
    ["c1", "c9"],
    "Tesla Model Y",
    "expensive",
    "advanced",
    "https://electrifynews.com/wp-content/uploads/2023/08/2023-tesla-model-y-electrify-news-14_cropped.png",
    2024,
    [
      "Motor: Dual motor all-wheel drive",
      "Power: 456 horsepower",
      "Battery: 75-82 kWh lithium-ion",
      "Range: 310-350 miles EPA",
      "Cargo: 76 cubic feet with seats folded",
      "Seating: 5 or 7 passengers available"
    ],
    [
      "Compact luxury SUV that combines Tesla's electric technology with practical versatility.",
      "Dual-motor all-wheel drive provides excellent acceleration and traction in all conditions.",
      "Spacious interior and cargo area make it ideal for families and active lifestyles.",
      "Over-the-air software updates continuously add new features and improve performance.",
      "Advanced safety features and autopilot capabilities provide peace of mind.",
      "Access to Tesla's extensive Supercharger network for convenient travel.",
      "Built in Austin, Texas and Shanghai, China with Tesla's innovative manufacturing."
    ],
    true,
    true,
    true,
    true
  ),

  new Car(
    "c24",
    ["c1", "c3"],
    "Ford Mustang Mach-E",
    "expensive",
    "advanced",
    "https://www.cnet.com/a/img/resize/2c7a12b817ae55cff2d041b37122a9346b1dba6b/hub/2019/11/17/71ccee2d-770b-46fe-abba-1b685bccefa4/mach-e-ogi.jpg?auto=webp&fit=crop&height=900&width=1200",
    2025,
    [
      "Motor: Single or dual electric motors",
      "Power: 266-480 horsepower",
      "Battery: 70-91 kWh lithium-ion",
      "Range: 250-312 miles EPA",
      "Drive: RWD or AWD available",
      "Charging: DC fast charging up to 150 kW"
    ],
    [
      "Electric SUV that brings Mustang performance heritage into the electric age.",
      "Multiple powertrain options from efficient RWD to high-performance GT variants.",
      "Distinctive design combines Mustang styling cues with modern SUV practicality.",
      "Advanced SYNC 4A infotainment system with large vertical touchscreen.",
      "Spacious interior and cargo area provide family-friendly versatility.",
      "Ford's BlueOval charging network provides convenient public charging access.",
      "Built in Cuautitlán, Mexico with Ford's commitment to electric innovation."
    ],
    true,
    false,
    true,
    true
  ),

  new Car(
    "c25",
    ["c4", "c10"],
    "Mazda MX-5 Miata",
    "moderate",
    "sporty",
    "https://di-sitebuilder-assets.dealerinspire.com/Mazda/model-pages/2025/MX-5+RF/Hero/Desktop/Hero.jpg",
    2025,
    [
      "Engine: 2.0L SKYACTIV-G 4-cylinder",
      "Power: 181 horsepower",
      "Transmission: 6-speed manual or automatic",
      "Weight: 2,341 lbs (lightweight design)",
      "Drive: Rear-wheel drive",
      "Top: Soft top convertible"
    ],
    [
      "Pure roadster that embodies the joy of driving with lightweight, balanced design.",
      "Perfect 50/50 weight distribution and low center of gravity create exceptional handling.",
      "Manual transmission option preserves the engaging, connected driving experience.",
      "Affordable sports car that makes performance driving accessible to enthusiasts.",
      "Reliable and efficient daily driver that transforms into weekend fun machine.",
      "Strong enthusiast community and extensive aftermarket support for modifications.",
      "Built in Hiroshima, Japan with Mazda's commitment to driving pleasure."
    ],
    false,
    false,
    false,
    true
  ),

  new Car(
    "c26",
    ["c4", "c5", "c6"],
    "LaFerrari",
    "luxurious",
    "challenging",
    "https://www.classicdriver.com/sites/default/files/users/57458/cars_images/57458-1017820-car-20240701_093707-bauer_sk-24.jpg",
    2014,
    [
      "Engine: 6.3L V12 with electric motor hybrid",
      "Power: 949 horsepower combined",
      "Transmission: 7-speed dual-clutch F1",
      "Weight: 3,495 lbs with carbon fiber construction",
      "Top Speed: 217 mph",
      "Production: 499 units plus special editions"
    ],
    [
      "Ultimate Ferrari hypercar combining naturally aspirated V12 with hybrid technology.",
      "Limited production of 499 units makes it one of the most exclusive Ferraris ever.",
      "Advanced hybrid system enhances performance while maintaining Ferrari's character.",
      "Extensive use of carbon fiber and F1 technology creates the ultimate driving experience.",
      "Active aerodynamics and advanced suspension systems optimize performance dynamically.",
      "Represents the pinnacle of Ferrari's engineering and design capabilities.",
      "Hand-built in Maranello, Italy by Ferrari's master craftsmen with racing heritage."
    ],
    false,
    false,
    false,
    true
  ),

  new Car(
    "c27",
    ["c4", "c5"],
    "Lamborghini Aventador",
    "luxurious",
    "challenging",
    "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/Ultimae/2023/02_21/aven_ultimae_s_02.jpg",
    2023,
    [
      "Engine: 6.5L naturally aspirated V12",
      "Power: 730-770 horsepower",
      "Transmission: 7-speed ISR single-clutch",
      "Drive: All-wheel drive with rear bias",
      "Top Speed: 217+ mph",
      "Acceleration: 0-60 mph in 2.9 seconds"
    ],
    [
      "Flagship Lamborghini supercar with iconic scissor doors and naturally aspirated V12 power.",
      "Distinctive angular design language creates unmistakable road presence and exclusivity.",
      "Naturally aspirated V12 engine delivers incredible sound and linear power delivery.",
      "Advanced all-wheel drive system provides exceptional traction and stability.",
      "Carbon fiber monocoque construction ensures lightweight strength and rigidity.",
      "Limited production run makes it highly collectible among supercar enthusiasts.",
      "Hand-built in Sant'Agata Bolognese, Italy with Lamborghini's commitment to excellence."
    ],
    false,
    false,
    false,
    true
  ),

  new Car(
    "c28",
    ["c5", "c7"],
    "Lexus LS",
    "luxurious",
    "advanced",
    "https://www.lexus.com.my/content/dam/lexus-v3-malaysia/model/sedan/ls-mc/lexus-ls-mlp-masthead-d-new.jpg",
    2025,
    [
      "Engine: 3.4L twin-turbo V6 hybrid",
      "Power: 416 horsepower combined",
      "Transmission: 10-speed automatic",
      "Drive: AWD with dynamic torque distribution",
      "Interior: Kiriko glass trim and premium leather",
      "Technology: Lexus Interface with 12.3-inch display"
    ],
    [
      "Flagship luxury sedan that showcases Lexus's commitment to refinement and innovation.",
      "Hybrid powertrain combines performance with exceptional fuel efficiency and smoothness.",
      "Whisper-quiet cabin features premium materials and advanced noise cancellation.",
      "Advanced safety systems include Lexus Safety System+ 3.0 with predictive features.",
      "Meticulous craftsmanship evident in every detail from stitching to panel gaps.",
      "Reliability and durability that Lexus is renowned for in the luxury segment.",
      "Built in Tahara, Japan with traditional Japanese attention to detail and quality."
    ],
    true,
    false,
    false,
    false
  ),

  new Car(
    "c29",
    ["c5", "c3"],
    "Lexus GX",
    "luxurious",
    "rugged",
    "https://toyotacanada.scene7.com/is/image/toyotacanada/lexus-2025-gx-550-hero-overtrail-plus-earth-black-roof-x?fit=constrain&wid=1920",
    2025,
    [
      "Engine: 3.4L twin-turbo V6",
      "Power: 349 horsepower",
      "Transmission: 10-speed automatic",
      "Drive: Full-time 4WD with low-range transfer case",
      "Towing: Up to 6,500 lbs capacity",
      "Ground Clearance: 9.7 inches"
    ],
    [
      "Luxury SUV that combines off-road capability with premium comfort and reliability.",
      "Body-on-frame construction provides exceptional durability for challenging terrain.",
      "Full-time 4WD system with low-range gearing tackles serious off-road obstacles.",
      "Luxurious interior features premium materials and advanced technology systems.",
      "Three rows of seating accommodate up to seven passengers in comfort.",
      "Proven reliability and durability make it ideal for adventure and exploration.",
      "Built in Yoshiwara, Japan with Lexus's commitment to luxury and capability."
    ],
    false,
    false,
    true,
    true
  ),

  new Car(
    "c30",
    ["c5", "c9"],
    "Lexus RX",
    "expensive",
    "advanced",
    "https://d101065gusk61e.cloudfront.net/wp-content/uploads/2024/11/20104951/2025-Lexus-RX-Walkthrough.jpg",
    2025,
    [
      "Engine: 2.4L turbo 4-cylinder or hybrid variants",
      "Power: 275-366 horsepower",
      "Transmission: 8-speed automatic",
      "Drive: FWD or AWD available",
      "Fuel Economy: 22-37 MPG depending on variant",
      "Technology: Lexus Interface with 14-inch touchscreen"
    ],
    [
      "Luxury crossover that pioneered the premium SUV segment with refined comfort.",
      "Multiple powertrain options including efficient hybrid variants for different needs.",
      "Spacious and luxurious interior features premium materials and advanced technology.",
      "Smooth and quiet ride quality prioritizes passenger comfort over sportiness.",
      "Comprehensive safety features include Lexus Safety System+ 3.0 standard.",
      "Excellent reliability record and strong resale value typical of Lexus vehicles.",
      "Built in Cambridge, Ontario with Lexus's commitment to luxury and quality."
    ],
    true,
    false,
    true,
    true
  ),

  new Car(
    "c31",
    ["c4", "c5"],
    "Lexus LC",
    "luxurious",
    "sporty",
    "https://tmna.aemassets.toyota.com/is/image/toyota/lexus/images/models/lc/2024/performance/Lexus-LC-MoreDynamicHandling-VideoStill-mobile-750x448-LEX-LC5-MY24-0047.jpg?wid=750&hei=448",
    2025,
    [
      "Engine: 5.0L naturally aspirated V8 or hybrid V6",
      "Power: 471 horsepower (V8) or 354 hp (hybrid)",
      "Transmission: 10-speed automatic",
      "Drive: Rear-wheel drive",
      "Top Speed: 168 mph (V8 variant)",
      "Design: Grand touring coupe styling"
    ],
    [
      "Stunning grand touring coupe that combines luxury craftsmanship with sporting performance.",
      "Naturally aspirated V8 engine delivers smooth power with incredible sound quality.",
      "Dramatic exterior design makes it one of the most beautiful cars on the road.",
      "Luxurious interior features premium materials and advanced infotainment technology.",
      "Balanced chassis provides engaging driving dynamics without sacrificing comfort.",
      "Limited production ensures exclusivity among luxury sports coupe buyers.",
      "Built in Motomachi, Japan with Lexus's commitment to craftsmanship and performance."
    ],
    false,
    false,
    false,
    true
  )
];
