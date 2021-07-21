import { generateListId } from './idHashProcessor'

const db: object = {
    UserName: "Admin",
    Email: "admin@admin.com",
    Password: "admin",
    lists: [
        {
            list_id: 56635049,
            list_title: 'Bem vindo ao listfy',
            list_color: '#1Db954',
            list_items: [{
                item_id: 59244453,
                item_title: 'Sobre o listfy',
                description: 'Listfy te ajuda a organizar os estudos da melhor maneira possivel, e com o mínimo de bugs 😉',
                date: '04/05/4242',
                is_checked: false,
            }]
        },
        {
            list_id: 56635894,
            list_title: 'Tic Plec, Tic Plau, Charlie Brau',
            list_color: '#FF0228',
            list_items: [{
                item_id: 59944453,
                item_title: 'Sobre o listfy',
                description: 'Listfy te ajuda a organizar os estudos da melhor maneira possivel, e com o mínimo de bugs 😉',
                date: '04/05/4242',
                is_checked: false,
            }]
        }
    ]
}

// interfaces =======================

interface list {
    list_id: number,
    list_title: string,
    list_color: string,
    list_items: object[],
}
// ==================================
export function verifyStorage() {
    //listfy-electron-0.1.0
    const HASH_DE_VERSAO: string = '5fjyfdf3c76453e49f2139c62af092c14898a1865a'
    var bancogravado;
    var hashDeVersao = localStorage.getItem('hashDeVersao');
    if (hashDeVersao == HASH_DE_VERSAO) {
        bancogravado = localStorage.getItem('bancogravado');
        var isbanco = JSON.parse(bancogravado)
        if (isbanco == null) {
            localStorage.setItem('db', JSON.stringify(db));
            bancogravado = 1;
            localStorage.setItem('bancogravado', JSON.stringify(bancogravado));
            console.table(db);
        } else {
            console.log("O banco esta gravado");
            console.table(isbanco);
        }
    } else {
        localStorage.setItem('hashDeVersao', HASH_DE_VERSAO);
        console.log('A sua versão da estrutra de dados estava defasada, vamos atualizar');
        localStorage.setItem('db', JSON.stringify(db));
        bancogravado = 1;
        localStorage.setItem('bancogravado', JSON.stringify(bancogravado));
        console.table(db);
    }
}

export function addNewList(listTitle: string, listColor: string) {
    let db = JSON.parse(localStorage.getItem('db'));
    let newList: list = {
        list_id: generateListId(),
        list_title: listTitle,
        list_color: listColor,
        list_items: []
    }
    db.lists.push(newList);
    localStorage.setItem('db', JSON.stringify(db));
    console.log('lista Adicionada');
}
export function editList(listTitle: string, listColor:string, listId:number){
    let db = JSON.parse(localStorage.getItem('db'));
    for(let i = 0 ; i < db.lists.length ; i++){
        if ( db.lists[i].list_id == listId ){
            db.lists[i].list_title = listTitle;
            if(listColor != null){
                db.lists[i].list_color = listColor;
            }
            break;
        }
    }
    localStorage.setItem('db', JSON.stringify(db));

}
export function deleteList(listId: number){
    let db = JSON.parse(localStorage.getItem('db'));
    for(let i = 0 ; i < db.lists.length ; i++){
        if ( db.lists[i].list_id == listId ){
            db.lists.splice(i,1)
            break;
        }
    }
    localStorage.setItem('db', JSON.stringify(db));
}