const sum = (a,b) => a+b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should generate greeting from name', () => {
	expect(generateGreeting('Amit')).toBe('Hello Amit!');
});

test('should generate greeting for no name', () => {
	expect(generateGreeting()).toBe('Hello Anonymous!');
})
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});