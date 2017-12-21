#!/usr/bin/env python

from flask import Flask, request
import subprocess
app = Flask(__name__)

@app.route('/groep1/prod', methods=['POST'])
def parse_groep1_build_request():
    cmd = ["nohup","bash", "deploy.sh" , "groep1", request.data, "prod"]
    p = subprocess.Popen(cmd)
    return "production build deployed :D"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8149)
