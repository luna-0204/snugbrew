import React from "react";

export default function FlavorLavender({ openFlavor }) {
  return (
    <main className="container" style={{ marginTop: 22 }}>
      <section className="card">
        <div style={{display:'flex',gap:20,flexWrap:'wrap',alignItems:'flex-start'}}>
          <div style={{flex:'1 1 420px',minWidth:280}}>
            <h2>Lavender — Soft Calm</h2>
            <p className="small">A soft floral calm for bedtime rituals — soothing & dreamy. Designed for 5–15 minute reset rituals.</p>

            <div style={{display:'flex',gap:12,marginTop:14,flexWrap:'wrap'}}>
              <div className="card" style={{minWidth:160}}>
                <h4 style={{marginTop:0}}>Tin</h4>
                <img src="/assets/images/lavender-tin.jpg" alt="Lavender tin" style={{width:'100%',borderRadius:10,objectFit:'cover',height:120}}/>
                <div className="price" style={{marginTop:8}}>Kit: ₹499</div>
                <div className="small">Compact ritual tin — perfect for a bedside reset.</div>
              </div>

              <div className="card" style={{minWidth:160}}>
                <h4 style={{marginTop:0}}>Starter Calm Kit</h4>
                <img src="/assets/images/lavender-calm-kit.jpg" alt="Lavender starter" style={{width:'100%',borderRadius:10,objectFit:'cover',height:120}}/>
                <div className="price" style={{marginTop:8}}>₹499</div>
                <div className="small">Tin • 2 sachets • eye mask • guide</div>
              </div>

              <div className="card" style={{minWidth:160}}>
                <h4 style={{marginTop:0}}>Premium Calm Kit</h4>
                <img src="/assets/images/lavender-premium-kit.jpg" alt="Lavender premium" style={{width:'100%',borderRadius:10,objectFit:'cover',height:120}}/>
                <div className="price" style={{marginTop:8}}>₹899 <span className="small" style={{textDecoration:'line-through',marginLeft:8}}>₹1299</span></div>
                <div className="small">Large tin • aromatherapy oil • sleep spray</div>
              </div>
            </div>
          </div>

          <div style={{width:420, maxWidth:'40%'}}>
            <img src="/assets/images/lavender-calm-kit.jpg" alt="Lavender hero" style={{width:'100%',borderRadius:12,objectFit:'cover',boxShadow:'0 30px 60px rgba(120,80,140,0.08)'}} />
          </div>
        </div>
      </section>
    </main>
  );
}
