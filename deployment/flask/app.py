#!/usr/bin/env python

from flask import Flask
import subprocess
app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello World!"

@app.route('/groep1/<repo>')
def groep1(repo):
    cmd = ["nohup","bash", "deploy.sh" , "groep1", repo]
    p = subprocess.Popen(cmd)
    return ":D"

@app.route('/groep2/<repo>')
def groep2(repo):
    cmd = ["nohup", "bash", "deploy.sh" , "groep2", repo]
    p = subprocess.Popen(cmd)
    return ":D"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8149)
