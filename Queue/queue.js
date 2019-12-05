/**
 * @param {any} value - Значение элемента
 * @param {object} next - Ссылка на след. элемент
 */
class QueueNode{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor() {
        this.first = null;
        this.last = null;
        this.len = 0;
    }
    isEmpty(){
        return this.len === 0;
    }
    size(){
        return this.len;
    }
    /**
     * Добавление элемента в очередь
     * @param {any} value - Значение элемента
     */
    enqueue(value){
        let oldLast = this.last;
        this.last = new QueueNode(value);

        if(this.isEmpty()) this.first = this.last;
        else oldLast.next = this.last;
        this.len++;
    }
    /**
     * Удаление элемента
     * @return {any} value - Значение элемента
     */
    denqueue(){
        if (this.isEmpty()) return null;
        let oldFirstValue = this.first.value;
        this.first = this.first.next;
        this.len--;
        return oldFirstValue;
    }
}