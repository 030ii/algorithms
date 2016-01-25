// rbt insert 
public class Insert{
	Rotate rotate = new Rotate();

	public void insert(tree_t T, node_t newNode){
		node_t parantNode = T.nil;  //sentinel node로 초기화
		node_t curNode = T.root;

		while(curNode != T.nil){ 	//sentinel node인지 확인 
			parantNode = curNode;
			if (newNode.key < curNode.key)
				curNode = curNode.left;
			else curNode = curNode.right;
		}

		newNode.parant = parantNode;

		if(parantNode == T.nil)
			T.root = newNode;

		else if(newNode.key < parant.key)
			parantNode.left = newNode;
		else parantNode.right = newNode;

		newNode.left = T.nil;	//newNode child 초기화
		newNode.right = T.nil;
		newNode.color = "RED";	//newNode 색깔 초기화

		insertFixUp(T, newNode);	//newNode에 의한 위배 처리 

	}

	public void insertFixUp(tree_t T, node_t fixUpNode){
		while(fixUpNode.parant.color == "RED"){ //parant-child 모두 red인 경우
			if(fixUpNode.parant == fixUpNode.parant.parant.left){
				node_t uncleNode = fixUpNode.parant.parnnt.right;

				//case 1
				if(uncleNode.color == "RED"){
					fixUpNode.parant.color = "BLACK";
					uncleNode.color = "BLACK";
					fixUpNode.parant.parnat.color = "RED";
					fixUpNode = fixUpNode.parant.parnat;  
				}

				//case 3
				else{
					if(fixUpNode == fixUpNode.parant.right){
						fixUpNode = fixUpNode.parant;
						rotate.leftRotate(T, fixUpNode);
					}
					//case 2
					fixUpNode.parant.color = "BLACK";
					fixUpNode.parant.parant.color = "RED";
					rotate.rightRotate(T, fixUpNode.parant.parant);
				}
			}

			else{ 	// if then 절에서 left와 right를 바꾼 경우와 같음
				node_t uncleNode = fixUpnode.parant.parant.left;

				if(uncleNode.color == "RED"){
					fixUpNode.parant.color = "BLACK";
					uncleNode.color = "BLACK";
					fixUpNode.parant.parnat.color = "RED";
					fixUpNode = fixUpNode.parant.parant;
				}
				else{
					if(fixUpNode == fixUpNode.parant.left){
						fixUpNode = fixUpNode.parant;
						rotate.rightRotate(T, fixUpNode);
					}

					fixUpNode.parant.color = "BLACK";
					fixUpNode.parant.parant.color = "RED";
					rotate.leftRotate(T, fixUpnode.parant.parant);
				}
			}
		}
		
		T.root.color = "BLACK"; //case 1과 parent가 black인 경우에 적용 
	}
}