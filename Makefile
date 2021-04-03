install:
	npm install

brain-games:
	node games/brain_games.js

brain-even:
	node games/brain_even.js

brain-calc:
	node games/brain_calc.js

brain-gcd:
	node games/brain_gcd.js

brain-progression:
	node games/brain_progression.js

brain-prime:
	node games/brain_prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint_fix:
	npx eslint . --fix