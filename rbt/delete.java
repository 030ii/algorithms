// rbt delete

public class Delete{
	Rotate rotate = new Rotate();

	public void transplant(tree_t T, node_t oldNode, node_t plantNode){	//oldNode를 plantNode로 교체 
		if(oldNode.parant == nil)
			T.root = plantNode;
		else if (oldNode == oldNode.parant.left)
			oldNode.parant.left = plantNode;
		else oldNode.parant.right = plantNode;
		plantNode.parant = oldNode.parant;	//plantNode가 nil일 때 예외 처리 없음 
	}

	public void delete(tree_t T, node_t node){
		String erasedColor = node.color;

		if(node.left == T.nil){ 	// left child가 없는 경우 
			fixUpNode = node.right;	// 보정 시작 노드 지정. NIL node 경우도 처리 
			transplant(T, node, node.right);
		}
		
		else if(node.right == T.nil){
			fixUpNode = node.left;	//보정 시작 노드 지정 
			transplant(T, node, node.left);
		}
	
		else {
			node_t successor =	treeMinimum(node.right);	
			erasedColor = successor.color; 	// erasedColor를 successor의 color로 갱신
			fixUpNode = successor.right; 	// 원래 successor 자리부터 fixup 시작 
			
			if(successor.parant == node)
				fixUpNode.parant = successor;	// NIL일 경우에는 parent 재지정 
			else{
				transplant(T, successor, successor.right);
				successor.right = node.right;
				successor.right.parant = successor;
			}
			//node자리에 successor 집어넣기
			transplant(T, node, successor);
			successor.left = node.left;
			successor.left.parant = successor;
			successor.color = node.color;
		}

		if(erasedColor == "BLACK")
			fixUp(T, fixUpNode);
	}

	public void fixUp(tree_t T, node_t fixUpNode){
		while(fixUpNode != T.root && fixUpNode.color = "BLACK"){
			if(fixUpNode == fixUpNode.parant.left){
				node_t sibling = fixUpNode.parant.right;
				
				// case 5
				if(sibling.color == "RED"){
					sibling.color = "BLACK";
					fixUpNode.parant.color = "RED";
					rotate.leftRotate(T, fixUpNode.parant);
					sibling = fixUpNode.parant.right;
				}

				//case 1
				if(sibling.left.color == "BLACK" && sibling.right.color == "BLACK"){
					sibling.color = "RED";
					fixUpNode = fixUpNode.parant;
				}
				else{
					//case 3
					if(sibling.right.color == "BLACK"){
						sibling.left.color = "BLACK";
						sibling.color = "RED";
						rotate.rightRotate(T, sibling);
						sibling = fixUpNode.parant.right;
					}
					//case2
					sibling.color = fixUpNode.parant.color;
					fixUpNode.parant.color = "BLACK";
					sibling.right.color = "BLACK";
					rotate.leftRotate(T, fixUpNode.parant);

					fixUpNode = T.root;	//종료 
				}
			}
			//then 코드에서 right와 left를 서로 바꾼 상태 
			else{ 
				node_t sibling = fixUpNode.parant.left;
				
				if(sibling.color == "RED"){
					sibling.color = "BLACK";
					fixUpNode.parant.color = "RED"
					rotate.rightRotate(T, fixUpNode.parant);
					sibling = fixUpNode.parant.left;
				}
				if(sibling.right.color == "BLACK" && sibling.left.color == "BLACK"){
					sibling.color = "RED";
					fixUpNode = fixUpNode.parant;
				}
				else{
					if(sibling.left.color == "BLACK"){
						sibling.right.color = "RED";
						sibling.color = "RED";
						rotate.leftRotate(T, sibling);
						sibling = fixUpNode.parnat.left;
					}
					sibling.color = fixUpNode.parant.color;
					fixUpNode.parant.color = "BLACK";
					sibling.left.color = "BLACK";
					rotate.rightRotate(T, fixUpNode.parant);
					fixUpNode = T.root;
				}
			}
		}
		fixUpNode.color = "BLACK";
	}
}