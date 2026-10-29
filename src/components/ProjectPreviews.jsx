import React from 'react';
import './ProjectPreviews.css';

// Software Engineering Preview: HyperStream Distributed Event Broker & Telemetry
export function HyperStreamPreview() {
  return (
    <div className="preview-hyperstream">
      {/* Top Console Bar */}
      <div className="preview-hyperstream-top">
        <div className="preview-status-pill">
          <div className="preview-status-dot" />
          <span className="preview-cluster-label">WORKER CLUSTER: ONLINE (8 NODES)</span>
        </div>
        <span className="preview-latency-badge">12ms P99 LATENCY</span>
      </div>

      {/* Live Stream Terminal Logs */}
      <div className="preview-terminal-logs">
        <div className="preview-log-ack">→ [ACK] queue.consume: batch #8429 (500 events)</div>
        <div className="preview-log-redis">• [REDIS] memory: 124MB | queue_depth: 0 (steady)</div>
        <div className="preview-log-sql">✓ [POSTGRES] bulk_insert committed in 4.2ms</div>
      </div>

      {/* Metrics Row */}
      <div className="preview-metrics-row">
        <div className="preview-metric-box">
          <div className="preview-metric-label">THROUGHPUT</div>
          <div className="preview-metric-val">25.4k /s</div>
        </div>
        <div className="preview-metric-box">
          <div className="preview-metric-label">MESSAGE LOSS</div>
          <div className="preview-metric-val green">0.00%</div>
        </div>
        <div className="preview-metric-box">
          <div className="preview-metric-label">UPTIME</div>
          <div className="preview-metric-val blue">99.99%</div>
        </div>
      </div>
    </div>
  );
}

// Software Engineering Preview: CloudGate API Gateway & Identity Service
export function CloudGatePreview() {
  return (
    <div className="preview-cloudgate">
      {/* Header */}
      <div className="preview-cloudgate-top">
        <span className="preview-cloudgate-label">GATEWAY PROXY ROUTER</span>
        <span className="preview-ratelimit-badge">RATE LIMIT: 96 / 100</span>
      </div>

      {/* API Route Log Items */}
      <div className="preview-route-list">
        <div className="preview-route-item">
          <div>
            <span className="preview-method-post">POST</span>
            <span className="preview-route-path">/v1/auth/jwt-verify</span>
          </div>
          <span className="preview-route-status">200 OK • 3ms</span>
        </div>

        <div className="preview-route-item">
          <div>
            <span className="preview-method-get">GET</span>
            <span className="preview-route-path">/v1/services/health</span>
          </div>
          <span className="preview-route-status">200 OK • 1ms</span>
        </div>
      </div>

      {/* Security Chips */}
      <div className="preview-security-chips">
        <span className="preview-chip-jwt">
          JWT HS256 Verified
        </span>
        <span className="preview-chip-bucket">
          Token Bucket OK
        </span>
        <span className="preview-chip-cache">
          Redis Cache HIT
        </span>
      </div>
    </div>
  );
}

// Software Engineering Preview: Nexus Full-Stack Collaborative Workspace
export function NexusPreview() {
  return (
    <div className="preview-nexus">
      {/* Header */}
      <div className="preview-nexus-top">
        <div className="preview-wss-label">
          <div className="preview-wss-dot" />
          <span className="preview-wss-text">WEBSOCKET HUB (WSS)</span>
        </div>
        <span className="preview-sync-badge">4 CLIENTS SYNCED</span>
      </div>

      {/* Sync State Card */}
      <div className="preview-state-card">
        <div className="preview-state-row">
          <span>State Vector Conflict:</span>
          <span className="preview-resolved-tag">Resolved (CRDT)</span>
        </div>
        <div className="preview-state-dim">
          <span>Database Replication:</span>
          <span>MySQL Primary-Replica</span>
        </div>
        <div className="preview-state-dim">
          <span>Transaction Isolation:</span>
          <span>Read Committed</span>
        </div>
      </div>

      {/* Footer Pill */}
      <div className="preview-pills-row">
        <span className="preview-pill-blue">
          Optimistic State Update
        </span>
        <span className="preview-pill-slate">
          ACID Enforced
        </span>
      </div>
    </div>
  );
}
