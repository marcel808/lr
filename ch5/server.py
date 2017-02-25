#!/usr/bin/env python

# https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask
# http://stackoverflow.com/questions/20646822/how-to-serve-static-files-in-flask

from flask import Flask, jsonify, send_from_directory, render_template
import json

app = Flask(__name__, static_folder="./static", template_folder="./static")

jobs = [
    {
        'id': 1,
        'title': u'Buy groceries',
        'description': u'Milk, Cheese, Pizza, Fruit, Tylenol',
        'done': False
    },
    {
        'id': 2,
        'title': u'Learn Python',
        'description': u'Need to find a good Python tutorial on the web',
        'done': False
    },
    {
        'id': 3,
        'title': u'Learn React/Redux',
        'description': u'Need to find a good Python tutorial on the web',
        'done': False
    }
]


@app.route('/api/jobs', methods=['GET'])
def get_jobs():
    return jsonify({'jobs': jobs})

@app.route('/api/job/<int:id>', methods=['GET'])
def get_job(id):
    ret = {'job': jobs[id]}
    print "get_job: returning {}".format(ret)
    return jsonify(ret)


STATIC_FILES = ['bundle.js', 'bundle.js.map', 'style.css']

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    print "index!: path = {}".format(path)
    # import  pdb; pdb.set_trace()

    # Return index.html for everything except for these static files:
    # e.g /jobs/x will return index.html
    # note that returning index.html for about/ will
    # cause an about/bundle.js request:

    file_name = path.split('/')[-1]
    if file_name not in STATIC_FILES:
        file_name = 'index.html'

    print "returning file: {}".format(file_name)
    return app.send_static_file(file_name)

if __name__ == '__main__':
    app.run(debug=True,
       threaded=True)
