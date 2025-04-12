const scriptURL = "https://script.google.com/macros/s/AKfycbx5E2hwuwXuKKZb9E0hy0vByYBwcgnMFkYgDoQLatcOEDCpQXwOjbOOdSjulexuYslQ/exec";

document.getElementById('skillIssueForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim().toLowerCase();

    if (username === "david") {
        alert('𝔜𝔬𝔲 𝔠𝔞𝔫𝔫𝔬𝔱 𝔰𝔲𝔟𝔪𝔦𝔱 𝔱𝔥𝔢 𝔟𝔬𝔯𝔪 𝔞𝔰 𝔪𝔢, 𝔟𝔢𝔠𝔞𝔲𝔰𝔢 𝔦 𝔞𝔪 𝔱𝔥𝔢 𝔬𝔫𝔢 𝔞𝔫𝔡 𝔠𝔞𝔫𝔫𝔬𝔱 𝔟𝔢 𝔯𝔢𝔭𝔩𝔞𝔠𝔢𝔡');
        return;
    }

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
    if (normalizedScore < 40) {
        relationshipText = "get out u ain't emo/I don't like you";
    } else if (normalizedScore < 60) {
        relationshipText = "I mean I don't like or dislike you, I guess we can talk.";
    } else {
        relationshipText = "David Likes you, ur so cool and emo hehe.";
    }

    document.getElementById('relationship').textContent = relationshipText;

    const formData = new FormData();
    formData.append("username", document.getElementById('username').value);
    formData.append("score", normalizedScore.toFixed(2));

    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            if (!response.ok) throw new Error('Failed to send data');
            console.log('Datos enviados correctamente');
            alert('𝔜𝔬𝔲𝔯 𝔯𝔢𝔰𝔭𝔬𝔫𝔰𝔢𝔰 𝔥𝔞𝔳𝔢 𝔟𝔢𝔢𝔫 𝔰𝔲𝔟𝔪𝔦𝔱𝔱𝔢𝔡 𝔠𝔬𝔯𝔯𝔢𝔠𝔱𝔩𝔶 𝔱𝔬 𝔇𝔞𝔳𝔦𝔡 𝔡𝔞𝔱𝔞𝔟𝔞𝔰𝔢, 𝔱𝔥𝔞𝔫𝔨 𝔶𝔬𝔲 𝔯𝔬𝔣𝔬𝔯 𝔭𝔞𝔯𝔱𝔦𝔠𝔦𝔭𝔞𝔱𝔦𝔫𝔤');
        })
        .catch(error => {
            console.error('Error al enviar datos', error);
            alert('𝔜𝔬𝔲𝔯 𝔯𝔢𝔰𝔭𝔬𝔫𝔰𝔢 𝔥𝔞𝔰 𝔫𝔬𝔱 𝔟𝔢𝔢𝔫 𝔰𝔢𝔫𝔱');
        });
});
