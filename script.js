// 当页面加载完成后运行
document.addEventListener('DOMContentLoaded', function() {
    // 获取表单元素
    const form = document.getElementById('loveTest');
    const resultSection = document.getElementById('resultSection');
    
    // 监听表单提交事件
    form.addEventListener('submit', function(event) {
        // 阻止表单默认提交行为
        event.preventDefault();
        
        // 获取所有输入值
        const inputs = form.querySelectorAll('input, select');
        let allFilled = true;
        
        // 检查是否所有字段都已填写
        inputs.forEach(input => {
            if (!input.value) {
                allFilled = false;
            }
        });
        
        if (allFilled) {
            // 计算契合度（示例：随机生成一个结果）
            const compatibility = Math.floor(Math.random() * 41) + 60; // 生成60-100之间的数字
            
            // 显示结果
            showResult(compatibility);
            
            // 隐藏表单
            form.style.display = 'none';
            
            // 显示结果区域
            resultSection.classList.remove('hidden');
        } else {
            alert('请填写所有信息！');
        }
    });
});

// 显示结果
function showResult(score) {
    const scoreElement = document.getElementById('compatibilityScore');
    const messageElement = document.getElementById('compatibilityMessage');
    
    // 动画显示分数
    let currentScore = 0;
    const timer = setInterval(() => {
        if (currentScore >= score) {
            clearInterval(timer);
        } else {
            currentScore++;
            scoreElement.textContent = currentScore;
        }
    }, 20);
    
    // 设置消息
    messageElement.textContent = getCompatibilityMessage(score);
}

// 重置测试
function resetTest() {
    const form = document.getElementById('loveTest');
    const resultSection = document.getElementById('resultSection');
    
    // 重置表单
    form.reset();
    
    // 显示表单
    form.style.display = 'block';
    
    // 隐藏结果
    resultSection.classList.add('hidden');
}

// 根据契合度返回不同的消息
function getCompatibilityMessage(score) {
    if (score >= 90) {
        return '天作之合！你们简直是命中注定的一对！';
    } else if (score >= 80) {
        return '非常般配！你们有很大的发展潜力！';
    } else if (score >= 70) {
        return '还不错哦，继续培养感情吧！';
    } else {
        return '任何感情都需要经营，重要的是真心！';
    }
}