// простенькая очередь :)
class Queue {
    constructor(items) {
        this._queueStartIndex = 0;
        this._queue = Array.isArray(items) ? [
            ...items
        ] : [];
    }

    add(item) {
        this._queue.push(item);
    }

    addAll(items) {
        this._queue.push(...items);
    }

    poll() {
        return !this.isEmpty() && this._queue[this._queueStartIndex++];
    }

    isEmpty() {
        return this._queueStartIndex === this._queue.length;
    }
}

class Trie {
    constructor(words, limit) {
        this._trie = this._createNode();
        this._words = Array.from(words); // запоминаем исходный массив
        this._limit = limit;

        this._buildTree();
    }

    _createNode() {
        return {
            edges: {},
            wordEnds: []
        }
    }

    _buildTree() {
        const words = this._words;
        const trie = this._trie;
        const prevDate = Number(new Date());
        let nodeCount = 0;

        // перебираем слова
        for(let i = 0; i < words.length; i++) {
            // перебираем все суффиксы слова
            for (let k = 0; k < words[i].length; k++) {
                const currentWord = words[i].substring(k);
                let currentNode = trie;
                // записываем суффикс в дерево
                for(let j = 0; j < currentWord.length; j++) {
                    if (!currentNode.edges[currentWord[j]]) {
                        currentNode.edges[currentWord[j]] = this._createNode();
                        nodeCount++;
                    }
                    currentNode = currentNode.edges[currentWord[j]];
                }
                // запоминаем индекс строки
                currentNode.wordEnds.push(i);
            }

        }

        console.log(trie);
        console.log(`trie building: ${Number(new Date()) - prevDate} ms`);
        console.log(`nodes count: ${nodeCount}`);
    }

    find(input) {
        const prevDate = Number(new Date());
        // берем Set, чтобы избавиться от дублей
        const results = new Set();

        let currentNode = this._trie;
        // проверяем, что такая подстрока вообще есть, если нет, сразу возвращаем пустой массив
        for(let i = 0; i < input.length; i++) {
            if (currentNode.edges[input[i]]) {
                currentNode = currentNode.edges[input[i]];
            } else {
                console.log(`trie search: ${Number(new Date()) - prevDate} ms`);
                return [];
            }
        }

        // начинаем обход дерева, чтобы найти исходные строки
        const queue = new Queue([currentNode]);

        wh:
        while (!queue.isEmpty()) {
            currentNode = queue.poll();
            for(let i = 0; i < currentNode.wordEnds.length; i++) {
                results.add(currentNode.wordEnds[i]);
                // перестаем искать, если нашли 10
                if (results.size === this._limit) {
                    break wh;
                }
            }
            queue.addAll(Object.values(currentNode.edges))
        }

        console.log(`trie search: ${Number(new Date()) - prevDate} ms`);

        // возвращаем непосредственно строки
        return Array.from(results)
            .map(index => this._words[index]);
    }
}