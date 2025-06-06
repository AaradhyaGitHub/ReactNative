import Category from "../models/category";
import Car from "../models/car";

export const CATEGORIES = [
  new Category("c1", "EV", "#00ff88"),
  new Category("c2", "Hybrid", "#42f554"),
  new Category("c3", "SUV ", "#f54242"),
  new Category("c4", "Sports Car", "#ff6b42"),
  new Category("c5", "Luxury Car", "#ffd700"),
  new Category("c6", "Collectible", "#8b4513"),
  new Category("c7", "Sedan", "#368dff"),
  new Category("c8", "Pickup", "#654321"),
  new Category("c9", "Crossover", "#9370db"),
  new Category("c10", "Convertible", "#ff69b4")
];

export const CARS = [
  new Car(
    "c1",
    ["c1"],
    "Tesla Model 3",
    "expensive",
    "advanced",
    "https://hips.hearstapps.com/hmg-prod/images/2024-tesla-model-3-long-range-rwd-132-66feb663ecf17.jpg?crop=0.704xw:0.594xh;0.143xw,0.392xh&resize=2048:*",
    2018,
    [
      "Electric Motor: Dual motor AWD",
      "Battery: 75-100 kWh lithium-ion",
      "Range: 358-405 miles",
      "Charging: Supercharger compatible",
      "Autopilot: Full self-driving capability",
      "Interior: Minimalist design with 15-inch touchscreen"
    ],
    [
      "Revolutionary electric sedan that redefined the automotive industry.",
      "Features over-the-air software updates that continuously improve performance.",
      "Autopilot system provides advanced driver assistance with full self-driving potential.",
      "Minimalist interior focuses on a large central touchscreen for all controls.",
      "Access to Tesla's extensive Supercharger network for fast charging.",
      "Industry-leading safety ratings with 5-star rating in all categories.",
      "Made in USA (Fremont, California) and China (Shanghai)."
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
    1997,
    [
      "Engine: 1.8L 4-cylinder with electric motor",
      "Transmission: eCVT",
      "Fuel Economy: 54 city / 50 highway MPG",
      "Hybrid System: Toyota Hybrid Synergy Drive",
      "Safety: Toyota Safety Sense 2.0",
      "Cargo: 24.6 cubic feet"
    ],
    [
      "Pioneer of mass-market hybrid technology and environmental consciousness.",
      "Exceptional fuel economy makes it ideal for daily commuting and city driving.",
      "Proven reliability with many examples exceeding 200,000+ miles.",
      "Distinctive aerodynamic design optimized for efficiency over aesthetics.",
      "Comprehensive safety suite comes standard across all trim levels.",
      "Low maintenance costs and strong resale value.",
      "Made in Japan with Toyota's legendary build quality."
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
    1990,
    [
      "Engine: 2.3L EcoBoost Turbo 4-cylinder",
      "Transmission: 10-speed automatic",
      "Seating: Up to 7 passengers",
      "Cargo: 18.2-87.8 cubic feet",
      "Towing: Up to 5,600 lbs",
      "Drive: Intelligent AWD available"
    ],
    [
      "America's best-selling SUV for decades, perfect for families and adventures.",
      "Three rows of seating provide flexible passenger and cargo configurations.",
      "EcoBoost engine delivers strong performance while maintaining reasonable fuel economy.",
      "Intelligent AWD system automatically adjusts power distribution for optimal traction.",
      "Generous towing capacity handles boats, trailers, and recreational equipment.",
      "Advanced infotainment system with SYNC 4 and smartphone integration.",
      "Built in Chicago, Illinois with American craftsmanship and engineering."
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
    1963,
    [
      "Engine: 3.0L twin-turbo flat-6",
      "Power: 379-640+ horsepower",
      "Transmission: 7-speed manual or 8-speed PDK",
      "Layout: Rear-engine, RWD/AWD",
      "Top Speed: 180-205+ mph",
      "Acceleration: 0-60 mph in 2.6-4.2 seconds"
    ],
    [
      "Iconic sports car that has evolved continuously while maintaining its essential character.",
      "Unique rear-engine layout provides distinctive handling characteristics and exceptional traction.",
      "Available in numerous variants from base Carrera to track-focused GT models.",
      "Precision engineering delivers both daily usability and track-day performance.",
      "Timeless design language that remains instantly recognizable across generations.",
      "Exceptional build quality and reliability for a high-performance sports car.",
      "Hand-built in Stuttgart, Germany with meticulous attention to detail."
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
    1972,
    [
      "Engine: 3.0L inline-6 turbo with mild hybrid",
      "Interior: Nappa leather with massage seats",
      "Technology: MBUX infotainment with AI",
      "Safety: Advanced driver assistance systems",
      "Comfort: Air suspension with curve tilting",
      "Sound: Burmester 3D surround sound"
    ],
    [
      "Flagship luxury sedan that showcases Mercedes-Benz's most advanced technologies.",
      "Opulent interior features premium materials and cutting-edge comfort systems.",
      "MBUX AI system learns driver preferences and provides intuitive interaction.",
      "Advanced safety systems often debut in S-Class before filtering to other models.",
      "Air suspension with curve tilting function enhances both comfort and handling.",
      "Whisper-quiet cabin creates a serene environment for passengers.",
      "Crafted in Sindelfingen, Germany with the highest standards of luxury."
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
    1976,
    [
      "Engine: 1.5L turbo 4-cylinder or 2.0L turbo",
      "Transmission: CVT or 10-speed automatic",
      "Fuel Economy: 32-38 city / 42-48 highway MPG",
      "Safety: Honda Sensing suite standard",
      "Interior: Spacious cabin with premium materials",
      "Reliability: Proven track record"
    ],
    [
      "Midsize sedan that consistently ranks among America's best-selling cars.",
      "Spacious interior rivals larger vehicles while maintaining excellent fuel economy.",
      "Honda's reputation for reliability means many Accords exceed 200,000 miles.",
      "Available hybrid powertrain delivers exceptional efficiency without compromising performance.",
      "Honda Sensing safety suite comes standard, providing peace of mind.",
      "Strong resale value makes it an excellent long-term investment.",
      "Manufactured in Marysville, Ohio with Honda's commitment to quality."
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
    1975,
    [
      "Engine: 3.3L V6 to 5.0L V8, plus hybrid options",
      "Towing: Up to 14,000 lbs capacity",
      "Payload: Up to 3,325 lbs",
      "Bed Options: 5.5, 6.5, or 8-foot beds",
      "Drive: 4WD available with terrain modes",
      "Technology: SYNC 4 with 12-inch touchscreen"
    ],
    [
      "America's best-selling truck for over four decades, defining the pickup segment.",
      "Multiple engine options provide the right balance of power and efficiency for any job.",
      "Exceptional towing capacity handles everything from boats to construction equipment.",
      "Available in multiple configurations from regular cab to crew cab with various bed lengths.",
      "4WD system with terrain management modes conquers any work site or adventure.",
      "Advanced technology integrates seamlessly with tools and productivity apps.",
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
    1994,
    [
      "Engine: 2.5L 4-cylinder with AWD standard",
      "Ground Clearance: 8.6 inches",
      "Cargo: 37.5-69.8 cubic feet",
      "Fuel Economy: 27-35 city / 31-38 highway MPG",
      "Safety: Toyota Safety Sense 2.0 standard",
      "Hybrid: Available with 40 MPG rating"
    ],
    [
      "Compact crossover that pioneered the segment and remains one of the most popular choices.",
      "Standard all-wheel drive provides confidence in various weather and terrain conditions.",
      "Right-sized for urban environments while offering SUV versatility and capability.",
      "Excellent reliability record with low maintenance costs and strong resale value.",
      "Hybrid variant delivers exceptional fuel economy without sacrificing functionality.",
      "Comprehensive safety features come standard across all trim levels.",
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
    2002,
    [
      "Engine: 2.0L turbo 4-cylinder or 3.0L turbo inline-6",
      "Transmission: 8-speed automatic",
      "Roof: Power-folding soft top",
      "Drive: Rear-wheel drive",
      "Performance: 0-60 mph in 3.9-5.2 seconds",
      "Weight Distribution: 50/50 front/rear"
    ],
    [
      "Premium roadster that combines open-air driving with BMW's sporting DNA.",
      "Power-folding soft top can be operated at speeds up to 31 mph for quick transitions.",
      "Perfect 50/50 weight distribution provides balanced handling and driving dynamics.",
      "Available engines range from efficient turbo-4 to powerful inline-6 options.",
      "Premium interior features high-quality materials and intuitive iDrive system.",
      "Ideal for weekend drives and scenic routes where the journey is the destination.",
      "Developed jointly with Toyota Supra, built in Graz, Austria with European precision."
    ],
    false,
    false,
    false,
    true
  )
];
