# 🔐 DevSecOps CI/CD Pipeline for Portfolio Website
This project implements a **complete DevSecOps CI/CD pipeline** for a personal portfolio website using modern DevOps and security tools.
This is the source code for my personal portfolio website, built to showcase my skills, projects, and experience.

🚀 **Live Website:**  
👉 [ajaymall-portfolio.netlify.app](https://ajay-mall-port-folio.netlify.app/)

## 🛠️ Tech Stack

- HTML5  
- CSS3  
- JavaScript  
- Responsive Design


## 📌 Features

- Mobile responsive layout  
- Project showcase section  
- Contact info and social links

---

---

## Stages in Pipeline:

| Tool             | Purpose                            |
|------------------|------------------------------------|
| **GitHub**        | Source Code Management             |
| **Jenkins**       | Continuous Integration (CI)        |
| **Docker**        | Containerization & Deployment      |
| **SonarQube**     | Static Code Analysis (Quality)     |
| **OWASP DC**      | Dependency Vulnerability Check     |
| **Trivy**         | Filesystem & Docker Image Scan     |
| **DockerHub**     | Docker Image Registry              |
| **ArgoCD**        | GitOps-based Continuous Delivery   |
| **Email Alerts**  | Build Notifications                |

---

## ⚙️ CI/CD Pipeline Overview

### 🔁 Jenkins Pipeline Stages:

1. **SCM Checkout**  
   Clones the latest code from GitHub using Webhook trigger.

2. **Trivy Security Scan**  
   Scans the file system for known vulnerabilities before building the Docker image.

3. **OWASP Dependency Check**  
   Detects CVEs in third-party libraries used in the project.

4. **SonarQube Scan**  
   Performs static code analysis to ensure code quality and maintainability.

5. **Docker Image Build**  
   Creates a production-ready Docker image from the codebase.

6. **Automated Testing**  
    frontend  test scripts.

7. **Push to DockerHub**  
   Successfully built and scanned image is pushed to your DockerHub repository.

8. **Deployment to Server**  
   Container is deployed using Docker Compose.

9. **Post-build Actions**  
   - Sends email notifications for build success/failure.  
   


---
## 🛠️ Integrations

- ✅ **GitHub Webhook Integration**  
  Automatically triggers Jenkins pipeline on every push.

- ✅ **SonarQube Integration**  
  Jenkins integrates with SonarQube to run static code analysis on every build.

- ✅ **DockerHub Integration**  
  Built images are pushed to DockerHub and used for deployment.

- ✅ **Email Notification**  
  Sends success/failure build alerts via Jenkins.

- ✅ **Efficient Runtime**  
  The average total Jenkins pipeline runtime is **~33 seconds**, verified in Jenkins Stage View.


---

<img width="1025" height="314" alt="image" src="https://github.com/user-attachments/assets/e025efdd-33c8-4a79-9c87-1ad68fbf99b0" />
<img width="1325" height="445" alt="Screenshot 2025-08-06 194851" src="https://github.com/user-attachments/assets/3a1044d7-8f61-4ab4-9693-8d33a6da7e1d" />
<img width="1913" height="947" alt="Screenshot 2025-08-05 165134" src="https://github.com/user-attachments/assets/be306f5e-6cd3-4968-9294-9732831894fe" />

<img width="1904" height="969" alt="Screenshot 2025-08-06 180500" src="https://github.com/user-attachments/assets/b4cec284-1e2b-49e2-9edd-2e87d7351dc6" />
<img width="1915" height="962" alt="Screenshot 2025-08-06 111759" src="https://github.com/user-attachments/assets/e95e5734-92a7-4bef-92cf-b3aa95eff285" />
<img width="1205" height="583" alt="Screenshot 2025-08-06 195126" src="https://github.com/user-attachments/assets/8ec116f0-f740-4cb6-9a7e-2e74de149bf3" />

<img width="1919" height="938" alt="Screenshot 2025-08-06 180441" src="https://github.com/user-attachments/assets/467ad3b4-3780-4f28-af7b-83a16b610224" />

<img width="1915" height="962" alt="Screenshot 2025-08-06 111759" src="https://github.com/user-attachments/assets/aa1bcaad-0756-45d9-a980-d0ab75650333" />

<img width="1386" height="709" alt="image" src="https://github.com/user-attachments/assets/a6ed6144-b7ba-4d4f-b85e-eb400d735a7e" />



Feel free to explore and fork the repo!
