#!/usr/bin/env python

from flask import Flask, request
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

@app.route('/groep1/branch')
def groep1branch():
    cmd = ["bash", "branch.sh" , "groep1"]
    p = subprocess.Popen(cmd, stdout=subprocess.PIPE,stderr=subprocess.PIPE,stdin=subprocess.PIPE)
    out, err = p.communicate()
    return out

@app.route('/groep2/branch')
def groep2branch():
    cmd = ["bash", "branch.sh", "groep1"]
    p = subprocess.Popen(cmd, stdout=subprocess.PIPE,stderr=subprocess.PIPE,stdin=subprocess.PIPE)
    out, err = p.communicate()
    return out

@app.route('/groep1', methods=['POST'])
def parse_request():
    cmd = ["nohup","bash", "deploy.sh" , "groep1", request.data]
    p = subprocess.Popen(cmd)
    return "deployed :D"

@app.route('/groep2', methods=['POST'])
def parse_groep2_request():
    cmd = ["nohup","bash", "deploy.sh" , "groep2", request.data]
    p = subprocess.Popen(cmd)
    return "deployed :D"

@app.route('/groep1/build', methods=['POST'])
def parse_groep1_build_request():
    cmd = ["nohup","bash", "build.sh" , "groep1", request.data]
    p = subprocess.Popen(cmd)
    return "build deployed :D"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8149)
