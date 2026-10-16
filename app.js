/**
 * HayonCampus — Interactive Landing Page Script
 * Powers feature chip switching, authentic project simulators,
 * interactive modals, and responsive navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
  // ========================================================
  // 1. FEATURE CHIP DATA & SPOTLIGHT SWITCHER
  // ========================================================
  const featureData = {
    timetable: {
      app: 'campassist',
      tag: 'CampAssist Module',
      title: 'Interactive Timetable & Next Lecture Countdown',
      desc: 'Tracks real-time lecture schedules with room numbers, instructor details, and automatic countdowns to your next classroom.',
      simType: 'campassist-timetable'
    },
    attendance: {
      app: 'campassist',
      tag: 'CampAssist Module',
      title: '75% Attendance Bunk Guard & Safe-Skip Planner',
      desc: 'Accurately calculates your attendance percentage and tells you exactly how many lectures you can afford to miss or need to attend.',
      simType: 'campassist-attendance'
    },
    roomfinder: {
      app: 'campassist',
      tag: 'CampAssist Module',
      title: 'Classroom Finder & Campus Seating Matrix',
      desc: 'Find any department room or computer lab instantly with interactive floor maps and mid-term exam hall seat allocations.',
      simType: 'campassist-roomfinder'
    },
    classes: {
      app: 'studyos',
      tag: 'StudyOS Module',
      title: 'Virtual Study Classes & Structured Syllabus',
      desc: 'Organized course units featuring lecture recordings, professor presentations, and topic-by-topic progress meters.',
      simType: 'studyos-classes'
    },
    vault: {
      app: 'studyos',
      tag: 'StudyOS Module',
      title: 'Shared Notes Vault & Cloudinary PDF Viewer',
      desc: 'Peer-reviewed student notes, exam prep summaries, community ratings, and high-speed in-browser PDF previews.',
      simType: 'studyos-vault'
    },
    teams: {
      app: 'studyos',
      tag: 'StudyOS Module',
      title: 'Team Finder for Hackathons & Capstone Labs',
      desc: 'Recruit classmates by specific skillset tags (e.g. React, Node, ML, Figma) with integrated group size and role vacancy badges.',
      simType: 'studyos-teams'
    }
  };

  const featureChips = document.querySelectorAll('.feature-chip');
  const cardCampAssist = document.getElementById('cardCampAssist') || document.getElementById('cardCampusAssist');
  const cardStudyOS = document.getElementById('cardStudyOS');

  let currentActiveFeature = 'timetable';

  function activateFeature(featureKey) {
    const data = featureData[featureKey];
    if (!data) return;

    currentActiveFeature = featureKey;

    // Update chip active states
    featureChips.forEach(chip => {
      const isActive = chip.getAttribute('data-feature') === featureKey;
      chip.classList.toggle('active', isActive);
      chip.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // Highlight corresponding card
    if (data.app === 'campassist' || data.app === 'campusassist') {
      if (cardCampAssist) {
        cardCampAssist.style.borderColor = 'rgba(255, 255, 255, 0.7)';
        cardCampAssist.style.boxShadow = '0 30px 70px rgba(25, 163, 233, 0.35)';
      }
      cardStudyOS.style.borderColor = '';
      cardStudyOS.style.boxShadow = '';
    } else {
      cardStudyOS.style.borderColor = 'rgba(255, 255, 255, 0.7)';
      cardStudyOS.style.boxShadow = '0 30px 70px rgba(217, 70, 168, 0.35)';
      if (cardCampAssist) {
        cardCampAssist.style.borderColor = '';
        cardCampAssist.style.boxShadow = '';
      }
    }
  }

  featureChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const key = chip.getAttribute('data-feature');
      activateFeature(key);
    });
  });

  // ========================================================
  // 2. MODAL SYSTEM
  // ========================================================
  const launcherModal = document.getElementById('launcherModal');
  const simulatorModal = document.getElementById('simulatorModal');
  const authModal = document.getElementById('authModal');
  const aboutModal = document.getElementById('aboutModal');
  const contactModal = document.getElementById('contactModal');
  const legalModal = document.getElementById('legalModal');

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Generic close triggers
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-backdrop');
      closeModal(modal);
    });
  });

  // Close on backdrop click
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Close on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.open').forEach(modal => closeModal(modal));
    }
  });

  // Open modals via buttons
  document.getElementById('navGetStartedBtn')?.addEventListener('click', () => openModal(authModal));
  document.getElementById('createAccountBtn')?.addEventListener('click', () => openModal(authModal));
  document.getElementById('exploreProductsBtn')?.addEventListener('click', () => openModal(launcherModal));
  
  const openCampAssistHandler = () => openModal(launcherModal);
  document.getElementById('openCampAssistBtn')?.addEventListener('click', openCampAssistHandler);
  document.getElementById('openCampusAssistBtn')?.addEventListener('click', openCampAssistHandler);
  document.getElementById('openStudyOSBtn')?.addEventListener('click', () => openModal(launcherModal));

  document.getElementById('navAboutBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(aboutModal);
  });

  document.getElementById('navContactBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(contactModal);
  });

  document.getElementById('footerContactBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(contactModal);
  });

  document.getElementById('learnMoreBtn')?.addEventListener('click', () => {
    const ecosystemSec = document.getElementById('ecosystem');
    ecosystemSec?.scrollIntoView({ behavior: 'smooth' });
  });

  // Quick demos on cards
  const previewCampAssistHandler = () => {
    openSimulator('campassist-attendance');
  };
  document.getElementById('previewCampAssistBtn')?.addEventListener('click', previewCampAssistHandler);
  document.getElementById('previewCampusAssistBtn')?.addEventListener('click', previewCampAssistHandler);

  document.getElementById('previewStudyOSBtn')?.addEventListener('click', () => {
    openSimulator('studyos-vault');
  });

  document.getElementById('demoCampAssistInModal')?.addEventListener('click', () => {
    closeModal(launcherModal);
    openSimulator('campassist-attendance');
  });

  document.getElementById('demoStudyOSInModal')?.addEventListener('click', () => {
    closeModal(launcherModal);
    openSimulator('studyos-vault');
  });

  // ========================================================
  // 3. INTERACTIVE SIMULATOR (Codebase Logic)
  // ========================================================
  const simHeading = document.getElementById('simHeading');
  const simBadge = document.getElementById('simBadge');
  const simContent = document.getElementById('simContent');

  function openSimulator(type) {
    renderSimulatorContent(type);
    openModal(simulatorModal);
  }

  function renderSimulatorContent(type) {
    if (type.startsWith('campassist') || type.startsWith('campusassist')) {
      simBadge.textContent = 'CAMPASSIST INTERACTIVE DEMO';
      simHeading.textContent = 'Smart Attendance & 75% Bunk Guard';
      
      simContent.innerHTML = `
        <p class="modal-intro">
          Test the exact attendance algorithm used in CampAssist. Enter your current class attendance to predict safe bunks or catch-up requirements.
        </p>

        <div class="sim-interactive-box">
          <div class="sim-metric-row">
            <div class="sim-metric-card">
              <span class="val" id="calcPercent">82.8%</span>
              <span class="lbl">Current Percentage</span>
            </div>
            <div class="sim-metric-card">
              <span class="val" style="color: #4ade80;" id="calcStatus">Safe</span>
              <span class="lbl">Academic Standing</span>
            </div>
            <div class="sim-metric-card">
              <span class="val" style="color: #ffd875;" id="calcBunks">3 Bunks</span>
              <span class="lbl">Safe Bunks Remaining</span>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="attLectures">Lectures Attended</label>
              <input type="number" id="attLectures" class="glass-input" value="29" min="0" max="100">
            </div>
            <div class="form-group">
              <label for="totalLectures">Total Lectures Conducted</label>
              <input type="number" id="totalLectures" class="glass-input" value="35" min="1" max="100">
            </div>
          </div>

          <div class="sim-calc-result" id="calcAdviceBox">
            🎉 You have 3 safe bunks left before dropping below the mandatory 75% threshold!
          </div>

          <!-- Mini Timetable Live Snapshot -->
          <div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid rgba(255,255,255,0.15);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
              <strong style="font-size:0.95rem; font-family:var(--font-heading);">Live Next Class Countdown</strong>
              <span style="font-size:0.75rem; background:rgba(34,197,94,0.25); color:#86efac; padding:3px 10px; border-radius:9999px;">Live Sync</span>
            </div>
            <div style="background:rgba(0,0,0,0.2); border:1px solid rgba(255,255,255,0.14); border-radius:14px; padding:14px; display:flex; justify-content:space-between; align-items:center;">
              <div>
                <h5 style="font-size:1.05rem; font-weight:700; margin-bottom:2px;">CS302: Operating Systems Lab</h5>
                <p style="font-size:0.82rem; margin:0; color:rgba(255,255,255,0.75);">Prof. Sharma • Room LH-204 (2nd Floor)</p>
              </div>
              <div style="text-align:right;">
                <span style="font-family:var(--font-heading); font-size:1.15rem; font-weight:700; color:#ffd875;">In 14 mins</span>
                <p style="font-size:0.75rem; margin:0; color:rgba(255,255,255,0.6);">Starts at 10:30 AM</p>
              </div>
            </div>
          </div>
        </div>
      `;

      // Wire up calculator logic
      const attInput = document.getElementById('attLectures');
      const totalInput = document.getElementById('totalLectures');
      const calcPercent = document.getElementById('calcPercent');
      const calcStatus = document.getElementById('calcStatus');
      const calcBunks = document.getElementById('calcBunks');
      const calcAdviceBox = document.getElementById('calcAdviceBox');

      function recalculateAttendance() {
        const attended = parseInt(attInput.value) || 0;
        const total = parseInt(totalInput.value) || 1;
        if (total <= 0 || attended < 0 || attended > total) {
          calcAdviceBox.textContent = 'Please enter valid attended and total class counts.';
          return;
        }

        const pct = ((attended / total) * 100);
        calcPercent.textContent = `${pct.toFixed(1)}%`;

        if (pct >= 75) {
          const safeBunks = Math.floor((attended - 0.75 * total) / 0.75);
          calcStatus.textContent = 'Safe';
          calcStatus.style.color = '#4ade80';
          calcBunks.textContent = `${safeBunks} ${safeBunks === 1 ? 'Bunk' : 'Bunks'}`;
          calcBunks.style.color = '#ffd875';
          calcAdviceBox.style.background = 'rgba(34, 197, 94, 0.2)';
          calcAdviceBox.style.borderColor = 'rgba(34, 197, 94, 0.4)';
          calcAdviceBox.style.color = '#dcfce7';
          calcAdviceBox.textContent = safeBunks > 0
            ? `🎉 You can safely bunk ${safeBunks} more ${safeBunks === 1 ? 'class' : 'classes'} while staying at or above 75%.`
            : `⚠️ You are currently at border threshold! Missing the next class will drop you below 75%.`;
        } else {
          const needed = Math.ceil((0.75 * total - attended) / 0.25);
          calcStatus.textContent = 'Critical';
          calcStatus.style.color = '#f87171';
          calcBunks.textContent = `Need ${needed}`;
          calcBunks.style.color = '#f87171';
          calcAdviceBox.style.background = 'rgba(239, 68, 68, 0.25)';
          calcAdviceBox.style.borderColor = 'rgba(239, 68, 68, 0.45)';
          calcAdviceBox.style.color = '#fee2e2';
          calcAdviceBox.textContent = `🚨 Attendance below 75%! You must attend ${needed} consecutive ${needed === 1 ? 'class' : 'classes'} without absence to recover.`;
        }
      }

      attInput.addEventListener('input', recalculateAttendance);
      totalInput.addEventListener('input', recalculateAttendance);

    } else {
      // StudyOS Interactive Simulator
      simBadge.textContent = 'STUDYOS WORKSPACE DEMO';
      simHeading.textContent = 'Collaborative Notes Vault & Team Finder';

      simContent.innerHTML = `
        <p class="modal-intro">
          Explore peer-reviewed study files and active hackathon team squads from the StudyOS repository.
        </p>

        <!-- Tab switches inside simulation -->
        <div class="tab-pill-switcher" style="margin-bottom: 20px;">
          <button type="button" class="tab-pill active" id="simNotesTab">📚 Notes Vault</button>
          <button type="button" class="tab-pill" id="simTeamsTab">🤝 Team Finder</button>
        </div>

        <div id="simNotesContainer">
          <div style="display:flex; gap:10px; margin-bottom:16px;">
            <input type="text" class="glass-input" placeholder="Search notes by subject (e.g. DBMS, Algorithms, OS)..." id="simNotesSearch" style="padding:10px 14px;">
          </div>
          <div style="display:flex; flex-direction:column; gap:12px;" id="simNotesList">
            <div class="flow-step" style="padding:16px;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <div>
                  <h4 style="font-size:1.05rem; margin-bottom:4px;">Distributed Systems & Concurrency Guide</h4>
                  <span style="font-size:0.75rem; color:#ffd875; font-weight:600;">⭐ 4.9/5 (48 ratings) • CS304 • PDF 4.2 MB</span>
                </div>
                <button type="button" class="pill-btn pill-btn-white" style="padding:6px 14px; font-size:0.78rem;" onclick="alert('Viewing PDF in high-speed Cloudinary reader...')">View Note</button>
              </div>
              <p style="font-size:0.85rem; margin-top:8px; margin-bottom:0; color:rgba(255,255,255,0.75);">Complete handwritten notes with Raft algorithm diagrams, vector clocks, and 2PC explanations.</p>
            </div>

            <div class="flow-step" style="padding:16px;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <div>
                  <h4 style="font-size:1.05rem; margin-bottom:4px;">Microprocessor 8086 Lab Solutions & Viva Sheet</h4>
                  <span style="font-size:0.75rem; color:#ffd875; font-weight:600;">⭐ 4.8/5 (92 ratings) • EC201 • PDF 2.8 MB</span>
                </div>
                <button type="button" class="pill-btn pill-btn-white" style="padding:6px 14px; font-size:0.78rem;" onclick="alert('Viewing PDF in high-speed Cloudinary reader...')">View Note</button>
              </div>
              <p style="font-size:0.85rem; margin-top:8px; margin-bottom:0; color:rgba(255,255,255,0.75);">All 12 assembly experiments verified by lab assistants with expected register outputs.</p>
            </div>
          </div>
        </div>

        <div id="simTeamsContainer" class="hidden">
          <div style="display:flex; flex-direction:column; gap:12px;">
            <div class="flow-step" style="padding:16px;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <div>
                  <h4 style="font-size:1.05rem; margin-bottom:4px;">Smart India Hackathon: AI Campus Navigator</h4>
                  <span style="font-size:0.75rem; background:rgba(34,197,94,0.2); color:#86efac; padding:3px 8px; border-radius:9999px;">2 / 4 Members Joined</span>
                </div>
                <button type="button" class="pill-btn pill-btn-white" style="padding:6px 14px; font-size:0.78rem;" onclick="this.textContent = 'Request Sent ✓'; this.disabled = true; this.style.opacity = '0.7';">Join Squad</button>
              </div>
              <p style="font-size:0.85rem; margin-top:8px; margin-bottom:8px; color:rgba(255,255,255,0.8);">Building indoor AR navigation for multi-floor campus auditoriums and seminar halls.</p>
              <div style="display:flex; gap:6px; flex-wrap:wrap;">
                <span style="font-size:0.72rem; background:rgba(255,255,255,0.12); padding:3px 8px; border-radius:6px;">React</span>
                <span style="font-size:0.72rem; background:rgba(255,255,255,0.12); padding:3px 8px; border-radius:6px;">Three.js</span>
                <span style="font-size:0.72rem; background:rgba(255,255,255,0.12); padding:3px 8px; border-radius:6px;">FastAPI</span>
              </div>
            </div>

            <div class="flow-step" style="padding:16px;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <div>
                  <h4 style="font-size:1.05rem; margin-bottom:4px;">Capstone: Cloud Distributed Attendance Logger</h4>
                  <span style="font-size:0.75rem; background:rgba(59,130,246,0.25); color:#93c5fd; padding:3px 8px; border-radius:9999px;">3 / 4 Members Joined</span>
                </div>
                <button type="button" class="pill-btn pill-btn-white" style="padding:6px 14px; font-size:0.78rem;" onclick="this.textContent = 'Request Sent ✓'; this.disabled = true; this.style.opacity = '0.7';">Join Squad</button>
              </div>
              <p style="font-size:0.85rem; margin-top:8px; margin-bottom:8px; color:rgba(255,255,255,0.8);">Seeking a UI/UX designer and frontend engineer for final year submission.</p>
              <div style="display:flex; gap:6px; flex-wrap:wrap;">
                <span style="font-size:0.72rem; background:rgba(255,255,255,0.12); padding:3px 8px; border-radius:6px;">Figma</span>
                <span style="font-size:0.72rem; background:rgba(255,255,255,0.12); padding:3px 8px; border-radius:6px;">Tailwind</span>
                <span style="font-size:0.72rem; background:rgba(255,255,255,0.12); padding:3px 8px; border-radius:6px;">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      `;

      // Simulator tab toggling
      const simNotesTab = document.getElementById('simNotesTab');
      const simTeamsTab = document.getElementById('simTeamsTab');
      const simNotesContainer = document.getElementById('simNotesContainer');
      const simTeamsContainer = document.getElementById('simTeamsContainer');

      simNotesTab.addEventListener('click', () => {
        simNotesTab.classList.add('active');
        simTeamsTab.classList.remove('active');
        simNotesContainer.classList.remove('hidden');
        simTeamsContainer.classList.add('hidden');
      });

      simTeamsTab.addEventListener('click', () => {
        simTeamsTab.classList.add('active');
        simNotesTab.classList.remove('active');
        simTeamsContainer.classList.remove('hidden');
        simNotesContainer.classList.add('hidden');
      });
    }
  }

  // ========================================================
  // 4. ECOSYSTEM DAY / NIGHT TAB SWITCHER
  // ========================================================
  const tabDayBtn = document.getElementById('tabDayBtn');
  const tabNightBtn = document.getElementById('tabNightBtn');
  const ecosystemDayView = document.getElementById('ecosystemDayView');
  const ecosystemNightView = document.getElementById('ecosystemNightView');

  tabDayBtn?.addEventListener('click', () => {
    tabDayBtn.classList.add('active');
    tabDayBtn.setAttribute('aria-selected', 'true');
    tabNightBtn.classList.remove('active');
    tabNightBtn.setAttribute('aria-selected', 'false');
    ecosystemDayView.classList.remove('hidden');
    ecosystemNightView.classList.add('hidden');
  });

  tabNightBtn?.addEventListener('click', () => {
    tabNightBtn.classList.add('active');
    tabNightBtn.setAttribute('aria-selected', 'true');
    tabDayBtn.classList.remove('active');
    tabDayBtn.setAttribute('aria-selected', 'false');
    ecosystemNightView.classList.remove('hidden');
    ecosystemDayView.classList.add('hidden');
  });

  // ========================================================
  // 5. MOBILE MENU DRAWER
  // ========================================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  mobileMenuBtn?.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Auto-close on link click
  navMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      mobileMenuBtn?.setAttribute('aria-expanded', 'false');
    });
  });

  // ========================================================
  // 6. LEGAL MODAL (Privacy & Terms)
  // ========================================================
  const legalModalHeading = document.getElementById('legalModalHeading');
  const legalModalContent = document.getElementById('legalModalContent');

  document.getElementById('footerPrivacyBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    legalModalHeading.textContent = 'Privacy Policy';
    legalModalContent.innerHTML = `
      <p><strong>Effective Date: 2026</strong></p>
      <p>HayonCampus values the privacy of every student, faculty member, and campus representative. We do not sell personal information or share student course records with unauthorized third parties.</p>
      <p><strong>1. Data Synchronization</strong><br>Your profile information, timetable schedules, and attendance metrics are stored securely within Firebase Cloud Firestore and encrypted in transit using standard TLS protocols.</p>
      <p><strong>2. Academic Records</strong><br>SGPA/CGPA calculations, notes vault uploads, and attendance estimates remain strictly your property. Only resources you designate as "Public" in StudyOS become visible to fellow students.</p>
      <p>For questions regarding your student data rights, contact privacy@hayoncampus.internal.</p>
    `;
    openModal(legalModal);
  });

  document.getElementById('footerTermsBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    legalModalHeading.textContent = 'Terms of Service';
    legalModalContent.innerHTML = `
      <p><strong>Effective Date: 2026</strong></p>
      <p>Welcome to HayonCampus. By accessing CampAssist or StudyOS via your HayonCampus credentials, you agree to these Terms.</p>
      <p><strong>1. Acceptable Academic Conduct</strong><br>Users agree to upload original notes, assignments, and study guides. Uploading copyright-infringing exam papers or malicious material is prohibited.</p>
      <p><strong>2. Single Sign-On Account Integrity</strong><br>You are responsible for safeguarding your HayonCampus login credentials. One account powers both platforms simultaneously.</p>
      <p>HayonCampus reserves the right to restrict access to accounts that violate university academic honor codes.</p>
    `;
    openModal(legalModal);
  });

  // Mock Form Submit Handlers
  window.handleMockRegister = () => {
    const signupForm = document.getElementById('signupForm');
    const authSuccessBox = document.getElementById('authSuccessBox');
    if (signupForm && authSuccessBox) {
      signupForm.classList.add('hidden');
      authSuccessBox.classList.remove('hidden');
    }
  };

  window.handleMockContact = () => {
    const contactForm = document.getElementById('contactForm');
    const contactSuccessBox = document.getElementById('contactSuccessBox');
    if (contactForm && contactSuccessBox) {
      contactForm.classList.add('hidden');
      contactSuccessBox.classList.remove('hidden');
    }
  };
});

