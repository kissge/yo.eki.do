---
title: Introduction to Legal NLP
date: 2022-09-04T12:30:00+09:00
lang: en
slides: true
tags:
  - NLP
  - LegalTech
---

# Introduction to Legal NLP <!-- slideshow-title -->

Yusuke Kido

Co-Founder & CTO, Legalscape, Inc.

Slides: `https://yo.eki.do/notes/lnlp/`

# Yusuke Kido

BSc in Info. Sci., the University of Tokyo, 2015

Master of Info. Sci. and Tech., the University of Tokyo, 2017

Research area: document engineering, discourse analysis

## Career

ex-Microsoft (Windows, Global Text Input Team)

→ Legalscape (Co-Founder & CTO)

## Disclaimer

- I'm not a legal expert
- Some information in this webinar is not applicable in India because Japan has very different legal system

# Legal systems in Japan and India

## Common law 🇮🇳 🇬🇧 🇺🇸

- **Precedents** (published judicial opinions) define rules
- Originates from England's legal systems since 11th century

## Civil law 🇯🇵 🇩🇪 🇫🇷

- **Codified statutes** define rules
- Originates from Roman law since 1st century

However, contrast between civil law vs common law is blurred today

# Why Legal NLP? <!-- slideshow-chapter-title -->

# Legal NLP is hot

1. Great demands from society
2. Perfect conditions for NLP to play a major role
3. Interesting characteristics of legal language

# Society craves "LegalTech"

- Law is an important foundation of modern society
  - Every member in society is bound by law
  - Every economic activity is bound by law
  - _Legal certainty_
- Legal industry is a large market, especially in the corporate law
  - Enterprises spend 💰💰💰💰💰 on legal affairs
- Legal matters require a very high level of expertise
  - Laws are too difficult for ordinary people to understand

---

<!-- slideshow-quote -->

> Overcoming the so-called information crisis of law is the main aim of database and expert system applications in the field of law.
> The explosion of relevant legal materials was realized in the late sixties and
> has led to the problem that lawyers cannot cope with the vast amount of relevant information sources
> by using the traditional information techniques.

[Schweighofer & Winiwarter, DEXA 1993]

# Legal domain is great field for NLPers <!-- slideshow-two-columns -->

- All the hustle resides in text data that are
  - of massive volume,
  - written in natural language,
  - produced as digital data, and
  - complex and difficult

<!-- -->

- Legal texts include:
  - Laws, orders, regulations
  - Contracts
  - Case texts, precedents, _ratio decidendi_

# Legal texts are not quite "natural" language <!-- slideshow-two-columns -->

- Most texts are written
  - by highly-skilled experts,
  - with the intention of eliminating ambiguity as much as possible,
  - in (sometimes) slightly different grammars and vocabulary from ordinary texts, and
  - after careful review
- Legal information is "Web" i.e. graph network via references

![Example of contracts](/images/2022/2022-09-04.lnlp.fig1.png)
Source: http://www.gov.pe.ca/photos/original/NAPA218636bonsh.pdf

# Quick Glance on Legal NLP: Tasks, Methods, and Challenges <!-- slideshow-chapter-title -->

- Legal judgment prediction
- Legal entailment (question answering)
- Legal document summarisation

# Legal judgment prediction

Predicting the court's outcome from case descriptions such as facts, arguments, and claims, e.g.

- Is any law violated? Which articles?
- Would the case be approved or dismissed?
- What crime charges should a defendant be accused of?
- How long would be the prison term?

## Datasets

- 🇮🇳 Indian Legal Documents Corpus (ILDC) [Malik _et al_., ACL 2021]
- 🇪🇺 (English): ECHR2021 [Chalkidis _et al_., NAACL 2021]

# Legal judgment prediction: ILDC

| text                                                                                                                                                                                                        | label |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---: |
| M. Khanwilkar, J. Delay condoned. Leave granted in Special Leave Petitions. ...                                                                                                                             |   1   |
| Uday Umesh Lalit, J. These appeals arise out of the judgment and order dated 19.03.2019 passed by the High Court of Himachal Pradesh at Shimla in CMP Nos.4761 and 5386 of 2018 in CWP No.2274 of 2017. ... |   0   |

- Labeled with '1' (at least one petition has been accepted) or '0' (all rejeceted)
- ILDC also includes case texts with decision reasoning explanations (annotated by legal experts)

# Legal judgment prediction

## Methods

- Rule-based [Kort, 1957]
- Feature-based classifiers (e.g. SVM and random forests)
  - Word n-grams [Aletras _et al_., 2016]
  - View of lower court and % of reversal of the court judging the case [Lin _et al_., 2012]
- Neural networks
  - LSTM [Chen _et al_., EMNLP-IJCNLP 2019]
  - Attention [Feng _et al_., 2019]
  - LEGAL-BERT [Chalkidis _et al_., 2020]

# Legal entailment (question answering)

Answering yes/no questions given relevant law article sentences

## Datasets

- Japan and Canada: COLIEE2022

## Methods

- Predicate-argument structure analysis [Fujita _et al_., COLIEE 2021]
- BERT [Yoshioka _et al_., COLIEE 2021]
- Transformation into logic programming language (Prolog) [Satoh _et al_., 2010]

# Legal entailment: COLIEE2022 corpus

<small style="font-size: 0.43em">

```xml
<pair label="Y" id="H18-1-2">
    <t1>
        (Seller's Warranty in cases of Superficies or Other Rights)Article 566
        (1)In cases where the subject matter of the sale is encumbered with for the purpose of a superficies, an emphyteusis, an easement, a right of retention or a pledge, if the buyer does not know the same and cannot achieve the purpose of the contract on account thereof, the buyer may cancel the contract. In such cases, if the contract cannot be cancelled, the buyer may only demand compensation for damages.
        (2)The provisions of the preceding paragraph shall apply mutatis mutandis in cases where an easement that was referred to as being in existence for the benefit of immovable property that is the subject matter of a sale, does not exist, and in cases where a leasehold is registered with respect to the immovable property.
        (3)In the cases set forth in the preceding two paragraphs, the cancellation of the contract or claim for damages must be made within one year from the time when the buyer comes to know the facts.
        (Seller's Warranty in cases of Mortgage or Other Rights) Article 567
        (1)If the buyer loses his/her ownership of immovable property that is the object of a sale because of the exercise of an existing statutory lien or mortgage, the buyer may cancel the contract.
        (2)If the buyer preserves his/her ownership by incurring expenditure for costs, he/she may claim reimbursement of those costs from the seller.
        (3)In the cases set forth in the preceding two paragraphs, the buyer may claim compensation if he/she suffered loss.
    </t1>
    <t2>
        There is a limitation period on pursuance of warranty if there is restriction due to superficies on the subject matter, but there is no restriction on pursuance of warranty if the seller's rights were revoked due to execution of the mortgage.
    </t2>
</pair>
```

</small>

- Pairs of (law article texts, question) are labeled with 'Y' or 'N'

# Legal document summarisation

## Datasets

- India: (Untitled dataset presented in [Parikh _et al_., 2021] and used in AILA 2021 shared task)

## Methods

- Traditional TextRank, BM25
- Extractive summarisation as binary classification with LEGAL-BERT [Furniturewala _et al_., AILA 2021]

# Legal NLP's ethical and legal challenges

Fairness and equality are top priority in legal problems

- Data bias
  - Are automatic systems, especially ones with data-driven methods, biased?
  - Should automatic systems judge as human judges do? No human can be 100% unbiased
- Interpretability and explainability
  - It's unacceptable legal judgments are done with black box systems
- Responsibility
  - In most countries legal advisory is only allowed to lawyers with occupational license
  - If someone acts accordingly to AI lawyer's advice and the advice was legally inappropriate, who are to blame?

---

<!-- slideshow-quote -->

> ## LegalTech On Trial – Regional German Bar ‘Wins Ban’ On Contract Platforms
>
> **The Hanseatic Bar Association in Hamburg** appears to have **won a court battle** that effectively **prevents contract platforms from offering their services to clients without lawyers directly involved**.
> The action was brought by the Hanseatic Bar against a consumer legal platform called Smartlaw.de – which is owned by the massive legal publisher and tech company, Wolters Kluwer.
> [...]
> The Bar claims that tech-based platforms like this cannot provide sufficient legal certainty for a client as they rely on an automated Q&A expert system to fill in a contract or other legal document template. In short, unless you have lawyers involved in contract creation then it should not be allowed, they say.

[Artificial Lawyer, 2019a]

---

<!-- slideshow-quote -->

> ## France Bans Judge Analytics, 5 Years In Prison For Rule Breakers
>
> In a startling intervention that seeks to limit the emerging litigation analytics and prediction sector,
> the **French Government has banned the publication of statistical information about judges’ decisions** – with a five year prison sentence set as the maximum punishment for anyone who breaks the new law.
> [...]
> In short, they didn’t like how the pattern of their decisions – now relatively easy to model – were potentially open for all to see.

[Artificial Lawyer, 2019b]

# LegalTech in the Real World: Examples from Industry <!-- slideshow-chapter-title -->

- Legal research
- e-Discovery
- Contract review and/or management
- Document automation
- Legal advice

# Legal research

- Common law countries
  - 🇺🇸 LexisNexis (1970): a RELX (Elsevier's parent) company
  - 🇺🇸 Westlaw (1975): a Thomson Reuters company
  - 🇺🇸 Casetext (2013)
- Civil law countries
  - 🇯🇵 Legalscape (2017) 🥰
    - Construct linked database of laws, orders, government's guidelines, and books, by analysing citations and other relations between them
    - Automatically structurize plain text legal documents into semantically marked up HTML

# Contract review and/or management

- 🇺🇸 LawGeex (2014)
- 🇨🇦 Kira Systems (2015)
- 🇯🇵 GVA TECH (2017)
- 🇯🇵 LegalForce (2017)
- 🇯🇵 MNTSQ (2018)

# Legal advice

- 🇬🇧 DoNotPay (2015)
  - Chatbot app for contesting parking tickets etc.
- 🇺🇸 Rocket Lawyer (2008)
  - Subscription-based online legal service

# Case Study from Japan <!-- slideshow-chapter-title -->

Case text pseudonymization

# Case study 🇯🇵 Case text pseudonymization

## Background

- Japan's judiciary lags far behind other countries in the use of IT
- One of the recent projects is constructing **open database of civil judgments**

## Problem

- **Privacy concern**
- 0.2M judgments made every year; manual post-editing all is not affordable

# Case study 🇯🇵 Case text pseudonymization

## Solution

- Automatic pseudonymization using NLP techniques
- Legalscape joined the team and built a PoC system [Hisamoto _et al_., 2022]
- Joint project with Japan Federation of Bar Associations and Ministry of Justice

# Anonymization: Missing information 😒

```
Plaintiff Ram Kido (hereinafter referred to as Plaintiff Ram)'s mother, Sunita Kido (hereinafter referred to as Sunita) was the president of Kido Systems, Inc. at the time of the incident.
```

↓

```
Plaintiff ████ (hereinafter referred to as Plaintiff ██)'s mother, █████ (hereinafter referred to as ██) was the president of ████████, Inc. at the time of the incident.
```

# Pseudonymization: 😄

```
Plaintiff Ram Kido (hereinafter referred to as Plaintiff Ram)'s mother, Sunita Kido (hereinafter referred to as Sunita) was the president of Kido Systems, Inc. at the time of the incident.
```

↓

```
Plaintiff A (hereinafter referred to as Plaintiff A)'s mother, B (hereinafter referred to as B) was the president of X₁ Systems, Inc. at the time of the incident.
```

Same entity = same alias

# Problem formulation

We formulated this as the series of these subtasks:

1. Target phrase extraction = NER
   - "Which phrases need to be pseudonymized?"
2. Entity identification ≈ co-reference analysis, entity linking
   - "What pseudonym should be each phrase replaced with?"

# Methods

1. Target phrase extraction = NER
   - Prior works
     - FiNER, Stanford NER [Oksanen _et al_., 2019]
     - BiLSTM-CRF [Barriere & Fouret, ACL 2019]
   - We tried **BERT** (P 0.945, R 0.934), spaCy, and rule-based
2. Entity identification ≈ co-reference analysis, entity linking
   - Rule-based (Accuracy 0.980)

〜95% accuracy, yay!

So this is acceptable as the nation's judiciary?

Well, not really.

# Lesson learned

This is actually an important point:

- 100% accuracy is impossible with machine learning
- However, people tends to request "as accurate as possible" especially in legal domain

Don't try to replace human with AI; assist them with technology

# Bonus: Web-based post-editing workflow <!-- slideshow-two-columns slideshow-font-size-small -->

In order to achieve even more accurate outputs, we also built a Web app to effectively find and fix errors of machine output manually

<iframe
  src="https://drive.google.com/file/d/1epOuBKMoE71hN9yAiu57ECwSoCpKbXir/preview"
  allowfullscreen
  style="height: calc(100% - 4em); aspect-ratio: 640 / 355"></iframe>

# Takeaways

- Legal NLP is 👍 (great demands!)
- Lots of interesting challenges left unsolved, with datasets and shared tasks available
- ~~AI replaces lawyers~~ Technology ❤️ expertise = 💯

<footer>

Contact: https://yusuk.eki.do/

Special thanks to Dr. Konjengbam Anand

Also to Dr. Kotaro Kataoka (IIT Hyderabad) and Prof. Reiji Suda (UTokyo), who brought us together in 2016

</footer>

# References <!-- slideshow-font-size-smallest -->

**[Aletras _et al_., 2016]** Nikolaos Aletras, Dimitrios Tsarapatsanis, Daniel Preotiuc-Pietro, and Vasileios Lampos. "Predicting judicial decisions of the European court of human rights: A natural language processing perspective." _PeerJ Computer Science_, 2:e93, 2016.

**[Artificial Lawyer, 2019a]** Artificial Lawyer. "LegalTech On Trial – Regional German Bar ‘Wins Ban’ On Contract Platforms." https://www.artificiallawyer.com/2019/10/10/legaltech-on-trial-regional-german-bar-wins-ban-on-contract-platforms/

**[Artificial Lawyer, 2019b]** Artificial Lawyer. "France Bans Judge Analytics, 5 Years In Prison For Rule Breakers." https://www.artificiallawyer.com/2019/06/04/france-bans-judge-analytics-5-years-in-prison-for-rule-breakers/

**[Barriere & Fouret, ACL 2019]** Valentin Barriere and Amaury Fouret. 2019. "May I Check Again? — A simple but efficient way to generate and use contextual dictionaries for Named Entity Recognition. Application to French Legal Texts." _Proceedings of the 22nd Nordic Conference on Computational Linguistics_, pages 327–332, Turku, Finland. Linköping University Electronic Press.

**[Chalkidis _et al_., 2020]** Ilias Chalkidis, Manos Fergadiotis, Prodromos Malakasiotis, Nikolaos Aletras, and Ion Androutsopoulos. "LEGAL-BERT: The muppets straight out of law school." _Findings of the Association for Computational Linguistics: EMNLP 2020_, pages 2898–2904, 2020.

**[Chalkidis _et al_., 2021]** Ilias Chalkidis, Manos Fergadiotis, Dimitrios Tsarapatsanis, Nikolaos Aletras, Ion Androutsopoulos, and Prodromos Malakasiotis. "Paragraph-level rationale extraction through regularization: A case study on European court of human rights cases." _Proceedings of the 2021 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies_, 2021.

**[Chen _et al_., EMNLP-IJCNLP 2019]** Huajie Chen, Deng Cai, Wei Dai, Zehui Dai, and Yadong Ding. "Charge-based prison term prediction with deep gating network". _Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP)_, pages 6362–6367, 2019.

**[Dale, 2018]** "Law and Word Order: NLP in Legal Tech". Towards Data Science. https://towardsdatascience.com/law-and-word-order-nlp-in-legal-tech-bd14257ebd06

**[Feng _et al_., 2019]** Yi Feng, Chuanyi Li, Jidong Ge, and Bin Luo. "Improving statute prediction via mining correlations between statutes." _Proceedings of The Eleventh Asian Conference on Machine Learning_, pages 710–725, 2019.

**[Feng _et al_., 2022]** Yi Feng, Chuanyi Li, and Vincent Ng. "Legal Judgment Prediction: A Survey of the State of the Art." _Proceedings of the Thirtieth International Joint Conference on Artificial Intelligence, IJCAI-22_, 2022.

**[Fujita _et al_., COLIEE 2021]** Masaki Fujita, Naoki Kiyota, and Yoshinobu Kano. "Predicate’s argument resolver and entity abstraction for legal question answering: Kis teams at coliee 2021 shared task." _Proceedings of the COLIEE-2021 Workshop on International Conference on Artificial Intelligence and Law (ICAIL 2021)_, 2021.

**[Furniturewala _et al_., AILA 2021]** Shaz Furniturewala, Racchit Jain, Vijay Kumari, Yashvardhan Sharma. "Legal Text Classification and Summarization using Transformers and Joint Text Features." _AILA 2021: Shared task on Artificial Intelligence for Legal Assistance_, in _Forum for Information Retrieval Evaluation_, 2021.

# References <!-- slideshow-font-size-smallest -->

**[Hisamoto _et al_., 2022]** Sorami Hisamoto, Yusuke Kido, Yoshiaki Tsuganezawa, and Miki Yagita. "民事判決のオープンデータ化へ向けた機械処理による判例仮名化の検証." _Proceedings of the Twenty-eighth Annual Meeting of the Association for Natural Language Processing_, Shizuoka, Japan, 2022.

**[Kort, 1957]** Fred Kort. "Predicting supreme court decisions mathematically: A quantitative analysis of the “right to counsel” cases." _American Political Science Review_, 51(1):1–12, 1957.

**[Lin _et al_., 2012]** Wan-Chen Lin, Tsung-Ting Kuo, Tung-Jia Chang, Chue-Han Yen, Chao-Ju Chen, and Shou-De Lin. "Exploiting machine learning models for Chinese legal documents labeling, case classification, and sentencing prediction." _International Journal of Computational Linguistics & Chinese Language Processing - Special Issue on Selected Papers from ROCLING XXIV_, 17(4), 2012.

**[Malik _et al_., ACL 2021]** Vijit Malik, Rishabh Sanjay, Shubham Kumar Nigam, Kripabandhu Ghosh, Shouvik Kumar Guha, Arnab Bhattacharya, and Ashutosh Modi. "ILDC for CJPE: Indian legal documents corpus for court judgment prediction and explanation." _Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 1: Long Papers)_, 2021.

**[Oksanen _et al_., 2019]** Oksanen, Arttu, Minna Tamper, Jouni Tuominen, Aki Hietanen, and Eero Hyvönen. "ANOPPI: A Pseudonymization Service for Finnish Court Documents." _Proceedings of the 32nd International Conference on Legal Knowledge and Information Systems (JURIX 2019)_. 2019.

**[Parikh _et al_., 2021]** Vedant Vijay Parikh, Vidit Mathur, Parth Mehta, Namita Mittal, and Prasenjit Majumder. "LawSum: A weakly supervised approach for Indian Legal Document Summarization." _arXiv preprint_, arXiv:2110.01188v3, 2021.

**[Satoh _et al_., 2010]** Satoh, Ken, Kento Asai, Takamune Kogawa, Masahiro Kubota, Megumi Nakamura, Yoshiaki Nishigai, Kei Shirakawa, and Chiaki Takano. "PROLEG: an implementation of the presupposed ultimate fact theory of Japanese civil code by PROLOG technology." _JSAI international symposium on artificial intelligence_. Springer, Berlin, Heidelberg, 2010.

**[Schweighofer & Winiwarter, DEXA 1993]** Schweighofer, Erich and Werner Winiwarter. “Legal Expert System KONTERM - Automatic Representation of Document Structure and Contents.” _The 4th International Conference on Database and Expert Systems Applications_, 1993.

**[Yoshioka _et al_., COLIEE 2021]** Masaharu Yoshioka, Yasuhiro Aoki, and Youta Suzuki. "BERT-based ensemble methods with data augmentation for legal textual entailment in COLIEE statute law task." _Proceedings of the COLIEE-2021 Workshop on International Conference on Artificial Intelligence and Law (ICAIL 2021)_, 2021.
