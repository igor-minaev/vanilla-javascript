test('should take old men older then 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];
    const oldAges = ages.filter(t => t > 90);

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})