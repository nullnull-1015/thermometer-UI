from flask import Flask, render_template, jsonify, send_from_directory
from flask_cors import CORS
from flask_socketio import SocketIO
import threading
import random
import time
from datetime import datetime

app = Flask(__name__, static_folder="./build/", static_url_path="/")
cors = CORS(app, supports_credentials=True)
socketio = SocketIO(app, cors_allowed_origins="*")

# @app.route('/<path:path>')
# def serve_file(path):
#     return send_from_directory("/", path)

@app.route("/")
def index():
    return send_from_directory(app.static_folder, 'index.html')

temps = list(range(-10, 41, 2))
idx   = 0
def send_stepping_data():
    global temps, idx
    while True:
        time.sleep(1)
        data = {"temperature": temps[idx]+random.random(), "humidity": 40+random.random()*10, "timestamp": datetime.now().timestamp()}
        socketio.emit('message', data)
        idx = (idx+1)%len(temps)

if __name__ == "__main__":
    threading.Thread(target=send_stepping_data).start() # データ配信ループ
    app.run(host="0.0.0.0", port=8000)