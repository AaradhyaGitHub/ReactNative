class Car {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    year,
    specifications,
    details,
    isReliable,
    isEconomical,
    isLuxury,
    isPerformance
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.specifications = specifications;
    this.details = details;
    this.year = year;
    this.complexity = complexity;
    this.affordability = affordability;
    this.isReliable = isReliable;
    this.isEconomical = isEconomical;
    this.isLuxury = isLuxury;
    this.isPerformance = isPerformance;
  }
}

export default Car;
