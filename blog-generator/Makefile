.PHONY: serve clean

OUTPUT_PATH='./output/html'

serve:
	poetry run python -m http.server --dir output

clean:
	rm -rf output

generate:
	make clean
	poetry run python generate.py
	cp -r output/* ../docs/
	make clean

format:
	poetry run black generate.py
	poetry run isort generate.py
