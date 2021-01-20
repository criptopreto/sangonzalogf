<script>
    import sidebarController from './sidebarController.js';
    import mementoes from '../../store';
    import '.sidebar.css';
</script>

<div class="sidebar">
    <button class="add-memento" on:click={sidebarController.addMemento}>Add Memento</button>

    <ui class="mementoes">
        {#each $mementoes as memento}
            <li class="memento-item" class:active={memento.active} on:click={()=>sidebarController.selectMemento(memento.id)}>
                {memento.title}
            </li>
        {/each}
    </ui>
</div>