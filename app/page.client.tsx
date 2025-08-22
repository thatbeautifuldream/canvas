"use client"

import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

export function PageClient() {
    return (
        <div className="tldraw__editor size-full">
            <Tldraw persistenceKey="tldraw-editor" />
        </div>
    )
}