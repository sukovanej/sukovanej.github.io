.PHONY: serve clean

OUTPUT_PATH='./output/html'

serve:
	poetry run python -m http.server --dir ../docs

clean:
	rm -rf output

generate:
	poetry run generate

format:
	poetry run black src
	poetry run isort src

check:
	poetry run mypy src
	poetry run pylint src
