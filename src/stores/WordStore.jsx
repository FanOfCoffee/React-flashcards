import { makeAutoObservable } from 'mobx';

class WordStore {
    words = [];
    
    constructor() {
        makeAutoObservable(this);
    }

    setWords(words) {
        this.words = words;
    }

    addWord(newWord) {
        this.words.push(newWord);
    }

    deleteWord(index) {
        this.words.splice(index, 1);
    }

    updateWord(index, updatedWord) {
        this.words[index] = updatedWord;
    }
}

const wordStore = new WordStore();
export default wordStore;