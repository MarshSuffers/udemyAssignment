class listNode<T> {
	next?: listNode<T>;

	constructor(public value: T) {}
}

class linkedList<T> {
	private root?: listNode<T>;
	private tail?: listNode<T>;
	private length = 0;

	add(value: T) {
		const node = new listNode(value);
		if (!this.root || !this.tail) {
			this.root = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.length++;
	}

	getNumElements() {
		return this.length;
	}

	print() {
		let current = this.root;
		while (current) {
			console.log(current.value);
			current = current.next;
		}
	}
}

const numList = new linkedList<number>();

numList.add(10);
numList.add(5);
numList.add(-3);

console.log(numList.getNumElements());
numList.print();

const nameList = new linkedList<string>();