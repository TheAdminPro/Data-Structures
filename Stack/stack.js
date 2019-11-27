/**
 * @param {any} value - Значение элемента
 * @param {object} next - Ссылка на след. элемент
*/
class StackNode{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.root = null;
        this.len = 0;
    }
    isEmpty(){
        return this.len === 0;
    }
    size(){
        return this.len;
    }
    /**
     * Добавление элемента в стек
     * @param {any} value - Значение элемента
     */
    push(value){
        let oldFirst = this.root;
        this.root = new StackNode(value);
        this.root.next = oldFirst;
        this.len++;
    }
    /**
     * Возвращение значение удаленного элемента
     * @return {any} value - Значение элемента
    */
    pop(){
        if (this.isEmpty()) return null;
        let oldFirst = this.root;
        this.root = this.root.next;
        this.len--;
        return oldFirst.value;
    }
}