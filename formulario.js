document.getElementById('skillIssueForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let score = 0;
    
    const questions = [
        { id: 'question1', type: 'select', maxPoints: 20 },
        { id: 'question2', type: 'select', maxPoints: 25 },
        { id: 'question4', type: 'select', maxPoints: 20 },
        { id: 'question5', type: 'select', maxPoints: 20 },
        { id: 'question6', type: 'select', maxPoints: 20 },
        { id: 'question7', type: 'select', maxPoints: 15 },
        { id: 'question8', type: 'select', maxPoints: 25 },
        { id: 'question9', type: 'select', maxPoints: 20 },
        { id: 'question10', type: 'select', maxPoints: 25 }
    ];
    
    let maxTotalScore = 0;
    
    questions.forEach(function(q) {
        let element = document.getElementById(q.id);
        maxTotalScore += q.maxPoints;
        
        if (q.type === 'select') {
            const selectedOption = element.options[element.selectedIndex];
            if (selectedOption && selectedOption.getAttribute('data-points')) {
                score += parseInt(selectedOption.getAttribute('data-points'));
            }
        }
    });

    let normalizedScore = (score / maxTotalScore) * 100;
    
    document.getElementById('score').textContent = normalizedScore.toFixed(2);
    
    let relationshipText = '';
    if (normalizedScore < 40) { // Cambiado a < 40
        relationshipText = "get out u ain't emo/I don't like you";
    } else if (normalizedScore < 60) {
        relationshipText = "I mean I don't like or dislike you, I guess we can talk.";
    } else {
        relationshipText = "David Likes you, ur so cool and emo hehe.";
    }
    
    document.getElementById('relationship').textContent = relationshipText;
});