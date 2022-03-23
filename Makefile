push:
	git push -u origin main

deploy:
	git push dokku main:master
