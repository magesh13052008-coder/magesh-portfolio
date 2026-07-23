"use client";

/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import type {
  CSSProperties,
  PointerEvent as ReactPointerEvent,
} from "react";

type DragState = {
  pointerX: number;
  pointerY: number;
  originX: number;
  originY: number;
};

export default function InteractiveIdCard() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [shaking, setShaking] = useState(false);
  const drag = useRef<DragState | null>(null);
  const shakeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function startDrag(event: ReactPointerEvent<HTMLDivElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      originX: position.x,
      originY: position.y,
    };
    if (shakeTimer.current) clearTimeout(shakeTimer.current);
    setShaking(false);
    setDragging(true);
  }

  function moveDrag(event: ReactPointerEvent<HTMLDivElement>) {
    if (!drag.current) return;
    const x = Math.max(-125, Math.min(125, drag.current.originX + event.clientX - drag.current.pointerX));
    const y = Math.max(-70, Math.min(95, drag.current.originY + event.clientY - drag.current.pointerY));
    setPosition({ x, y });
  }

  function releaseDrag(event: ReactPointerEvent<HTMLDivElement>) {
    if (!drag.current) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    drag.current = null;
    setDragging(false);
    setPosition({ x: 0, y: 0 });
    setShaking(true);
    shakeTimer.current = setTimeout(() => setShaking(false), 1600);
  }

  const tiltX = Math.max(-10, Math.min(10, position.y / -8));
  const tiltY = Math.max(-16, Math.min(16, position.x / 7));
  const tiltZ = Math.max(-8, Math.min(8, position.x / 16));
  const style = {
    "--drag-x": `${position.x}px`,
    "--drag-y": `${position.y}px`,
    "--tilt-x": `${tiltX}deg`,
    "--tilt-y": `${tiltY}deg`,
    "--tilt-z": `${tiltZ}deg`,
  } as CSSProperties;

  return (
    <div className="id-stage" aria-label="Interactive MSEC student identity card">
      <div className="lanyard-anchor">
        <span>MSEC</span><span>MSEC</span><span>MSEC</span>
      </div>
      <div className="lanyard-ring" />
      <div
        className={`interactive-id ${dragging ? "is-dragging" : ""} ${shaking ? "is-shaking" : ""}`}
        style={style}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={releaseDrag}
        onPointerCancel={releaseDrag}
        role="img"
        aria-label="Student ID card of S. Magesh Kumar from Meenakshi Sundararajan Engineering College. Drag to interact."
      >
        <div className="id-card-depth" />
        <div className="id-card-face">
          <div className="id-college">
            <div className="id-seal">MSEC</div>
            <div>
              <strong>MEENAKSHI SUNDARARAJAN</strong>
              <span>ENGINEERING COLLEGE</span>
              <small>CHENNAI · EST. 2001</small>
            </div>
          </div>
          <div className="id-label">STUDENT IDENTITY CARD</div>
          <div className="id-photo-wrap">
            <img src="/magesh-profile.jpeg" alt="" draggable="false" />
          </div>
          <h3>S. MAGESH KUMAR</h3>
          <p>B.E. COMPUTER SCIENCE AND ENGINEERING</p>
          <div className="id-detail-grid">
            <div><span>DEPARTMENT</span><strong>CSE - B</strong></div>
            <div><span>VALIDITY</span><strong>2025 - 2029</strong></div>
          </div>
          <div className="id-footer">
            <div className="barcode"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
            <span>STUDENT</span>
          </div>
        </div>
      </div>
      <p className="drag-hint"><span>↔</span> DRAG &amp; RELEASE THE ID CARD</p>
    </div>
  );
}
