
const contatos = 'https://api.telegram.org/bot5694149422:AAFAdlAKzYQ5vJISwZtHz-XF1W-TQDNV1wI/getUpdates';

function busca(link) {
    fetch(link)
        .then(response => response.json())
        .then((res) => {
            console.log(res)
        })
}

busca(contatos)