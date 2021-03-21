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

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint_fix:
	npx eslint . --fix