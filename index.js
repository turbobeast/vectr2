var vectr2 = function (x,y) {

	this.x = x || 0;
	this.y = y || 0;

};

vectr2.prototype = {

	constructor : vectr2,


	set : function (x,y) {
		this.x = x;
		this.y = y;

		return this;
	},


	mag : function () {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	},


	length : function () {
		return this.mag();
	},


	add : function (vec) {
		return new vectr2(this.x + vec.x, this.y + vec.y );
	},


	subtract : function (vec)  {
		return new vectr2(this.x + -vec.x, this.y + -vec.y);
	},


	bisect : function (vec) {
		return this.unit().add(vec.unit()).setMagnitude(110);
	},



	unit : function () {
		var magnitood = this.mag();
		return new vectr2(this.x / magnitood, this.y / magnitood);
	},

	normalize : function () {
		var magnitood = this.mag();
		this.x /= magnitood;
		this.y /= magnitood;

		return this;
	},


	angle : function (vec) {
		var adjacent = this.project(vec).mag(),
		hypoteneuse = this.mag();

		if(hypoteneuse === 0) {
			return 0;
		}

		return Math.acos( adjacent / hypoteneuse );

	},


	leftNormal : function () {
		return new vectr2(this.y, -this.x);
	},


	rightNormal : function () {
		return new vectr2(-this.y, this.x);
	},


	dot : function (vec) {
		return this.x * vec.x + this.y * vec.y;
	},

	project : function (vec) {
		var dotScalar = this.dot(vec) / vec.dot(vec);
		return new vectr2(vec.x * dotScalar, vec.y * dotScalar);
	},


	perpendicular : function (vec) {
		var cloney = this.clone(),
		parallel = this.project(vec);

		return cloney.subtract(parallel);
	},


	multiply : function (scalar) {
		this.x *= scalar;
		this.y *= scalar;

		return this; 
	},


	setMagnitude : function (scalar) {
		var unitVec = this.unit();

		this.x = unitVec.x * scalar;
		this.y = unitVec.y * scalar;

		return this; 
	},

	max : function (limit) {
		var currentMag = this.mag();
		if(currentMag > limit) {
			this.setMagnitude(limit);
		}
	},


	clear : function () {
		this.x = 0;
		this.y = 0;
	},



	clone : function () {
		return new vectr2(this.x, this.y);
	},


	ratio : function (vec) {
		return this.mag() / vec.mag();
	},



	render : function (startX, startY, ctx, styl) {

		ctx.save();
		ctx.strokeStyle = styl || 'rgb(255,0,0)';
		ctx.beginPath();
		ctx.moveTo(startX, startY);
		ctx.lineTo(startX - this.x, startY - this.y);
		ctx.stroke();
		ctx.closePath();
		ctx.restore();
	}


};


module.exports = vectr2;
