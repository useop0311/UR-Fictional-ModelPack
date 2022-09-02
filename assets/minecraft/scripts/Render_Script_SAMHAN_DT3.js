var renderClass = "jp.ngt.rtm.render.VehiclePartsRenderer";
importPackage(Packages.org.lwjgl.opengl);
importPackage(Packages.jp.ngt.rtm.render);
importPackage(Packages.jp.ngt.ngtlib.math);

function init(par1, par2)
{
	frame = renderer.registerParts(new Parts("Group1"));     //台車枠オブジェクト
	wheel1 = renderer.registerParts(new Parts("wheel1"));   //車輪１オブジェクト
	wheel2 = renderer.registerParts(new Parts("wheel2"));   //車輪２オブジェクト
}

function render(entity, pass, par3)
{

	GL11.glPushMatrix();


	var f0 = renderer.getWheelRotationR(entity);
	var y0 = -0.5603  //回転軸Ｙ位置
	var z1 = 1.0280   //車輪１回転軸Ｚ位置
	var z2 = -1.0280  //車輪２回転軸Ｚ位置

	//台車枠
	frame.render(renderer);
	
	//車輪１
	GL11.glPushMatrix();
	renderer.rotate(f0, 'X', 0.0, y0, z1);
	wheel1.render(renderer);
	GL11.glPopMatrix();

	//車輪２
	GL11.glPushMatrix();
	renderer.rotate(f0, 'X', 0.0, y0, z2);
	wheel2.render(renderer);
	GL11.glPopMatrix();

	GL11.glPopMatrix();
}
