// src/store/nodePositionStore.js
import { create } from 'zustand';

const useNodePositionStore = create((set) => ({
    nodePositions: {},
    setNodePosition: (nodeId, position) => set((state) => ({
        nodePositions: {
        ...state.nodePositions,
        [nodeId]: position,
        },
    })),
}));

export default useNodePositionStore;