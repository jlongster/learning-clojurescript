// This is ugly, hacked-together-quickly code

function RadialStroke(color, brush) {
  this._vertices = new Float32Array(200);
  this._texcoords = new Float32Array(200);
  this._numVertices = 0;
  this._color = color && goog.color.hexToRgb(color).map(function(x) { return x / 255; });
  this._rawColor = color;
  this._brush = brush;
}

RadialStroke.prototype.addVertex = function(x, y, tx, ty) {
  this._vertices = this._maybeResize(this._vertices,
                                     (this._numVertices * 2) + 2);
  this._texcoords = this._maybeResize(this._texcoords,
                                      (this._numVertices * 2) + 2);

  var ptr = this._numVertices * 2;
  this._vertices[ptr] = x;
  this._vertices[ptr + 1] = y;

  ptr = this._numVertices * 2;
  this._texcoords[ptr] = tx;
  this._texcoords[ptr + 1] = ty;

  this._numVertices++;
};

RadialStroke.prototype._maybeResize = function(vec, count) {
  if(vec.length < count) {
    var next = new Float32Array(vec.length +
                                (count < 1000 ? 1000 : count));
    next.set(vec);
    return next;
  }
  return vec;
};

RadialStroke.prototype.setCurrentPos = function(x, y) {
  this._currentPos = [x, y];
}

RadialStroke.prototype.getCurrentPos = function() {
  return this._currentPos;
};

RadialStroke.prototype.getTexCoords = function() {
  return this._texcoords;
}

// Generic mesh methods

RadialStroke.prototype.getNumVertices = function() {
  return this._numVertices;
}

RadialStroke.prototype.setNumVertices = function(num) {
  this._numVertices = num;
}

RadialStroke.prototype.getVertices = function() {
  return this._vertices;
};

RadialStroke.prototype.getColor = function() {
  return this._color;
};

RadialStroke.prototype.getBrush = function() {
  return this._brush;
};

RadialStroke.prototype.isColor = function(color) {
  return this._rawColor === color;
};

RadialStroke.prototype.serialize = function() {
  return ["radial", this._vertices, this._texcoords, this._numVertices,
          this._color, this._rawColor, this._brush];
}

RadialStroke.unserialize = function(data) {
  var mesh = new RadialStroke();
  mesh._vertices = data[1];
  mesh._texcoords = data[2];
  mesh._numVertices = data[3];
  mesh._color = data[4];
  mesh._rawColor = data[5];
  mesh._brush = data[6];
  return mesh;
}
