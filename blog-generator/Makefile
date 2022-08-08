.PHONY: serve clean

OUTPUT_PATH='./output/html'

serve:
	poetry run python -m http.server --dir ../docs

clean:
	rm -rf output

generate:
	poetry run python generate.py

format:
	poetry run black generate.py
	poetry run isort generate.py
