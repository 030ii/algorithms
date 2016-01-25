// rbt rotate 
public class Rotate{
	public void leftRotate(tree_t T, node_t x){
		node_t y = x.right;	// y를 설정한다 
		
		x.right = y.left;	// y의 왼쪽 서브트리를 x의 오른쪽 서브 트리로 옮긴다

		if(y.left != T.nil)
			y.left.p = x;

		y.p = x.p 	// x의 부모를 y로 연결한다
		if(x.p == T.nil)
			T.root = y;
		else if(x == x.p.left)
			x.p.left = y;
		else x.p.right = y;

		y.left = x;	// x를 y의 왼쪽에 위치시킨다 
		x.p = y; // x의 부모를 y로 설정하면서 최종 left rotate완료 
	}

	public void rightRotate(tree_t T, node_t y){
		node_t x = y.left; // x를 설정한다 

		y.left = x.right; // x의 오른쪽 서브트리를 y의 왼쪽 서브 트리로 옮긴다

		if(x.right != T.nil) 
			x.right.p = y;

		x.p = y.p // y의 부모를 x로 연결한다
		if(y.p == T.nil)
			T.root = x;
		else if(y == y.p.right)
			y.p.right = x;
		else y.p.left = x;

		x.right = y; // y를 x의 오른쪽에 위치시킨다 
		y.p = x; // y의 부모를 x로 설정하면서 최종 right rotate완료 
	}
}