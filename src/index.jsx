import PostMessageMermaid from './PostMessageMermaid';

class tingsMermaid {
    initialize(registry, store) {
        registry.registerPostMessageAttachmentComponent(PostMessageMermaid);
    }

    uninitialize() {
        // No clean up required.
    }
}

window.registerPlugin('com.spikeassociates.tings-mermaid', new tingsMermaid());