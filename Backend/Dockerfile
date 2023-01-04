FROM python:3.8-slim-buster

ADD main.py /
ADD token.txt /

COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

CMD ["python", "./main.py"]