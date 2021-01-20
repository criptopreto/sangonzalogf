import mementoes from '../../store';

export default {
    addMemento(){
        mementoes.update(memento=>[...memento, {
            id: memento.length ? memento[memento.length -1].id + 1 : 0,
            icon: null,
            title: 'Your Notification Title',
            message: 'Mensaje de la notificación.',
            settings: {
                date: new Date().toISOString().split('T')[0],
                time: '12:00',
                repeat: false
            }
        }]);
    },

    selectMemento(id){
        mementoes.update(mementoes=>{
            return mementoes.map(memento=>{
                if(memento.id === id){
                    memento.active = true;
                }else{
                    delete memento.active;
                }
                return memento;
            })
        })
    }
}