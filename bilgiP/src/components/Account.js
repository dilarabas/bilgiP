import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Account.css';

const Account = () => {
    const [userData, setUserData] = useState(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            return {
                name: user.name || 'Kullanıcı',
                surname: user.surname || 'Ad',
                email: user.email || 'user@email.com',
                registrationDate: user.registrationDate || 'Bilinmiyor',
                profileImage: user.profileImage || 'https://i.pravatar.cc/150?img=8',
                bio: user.bio || 'Buraya kısa bir biyografi yazılabilir.',
                completedTests: user.completedTests || 0,
                averageScore: user.averageScore || 0,
                socialLinks: user.socialLinks || {
                    linkedin: '',
                    github: '',
                    website: '',
                },
                phone: user.phone || '',
                address: user.address || '',
                websiteUrl: user.websiteUrl || '',
                birthday: user.birthday || '',
                gender: user.gender || '',
                work: user.work || [], // Örn: [{ company: '...', position: '...' }]
                skills: user.skills || [], // Örn: ['UI/UX', 'Web Design']
                additionalInfo: user.additionalInfo || [], // Ek Bilgiler Dizisi
            };
        } else {
            return {
                name: 'Kullanıcı',
                surname: 'Ad',
                email: 'user@email.com',
                registrationDate: 'Bilinmiyor',
                profileImage: 'https://i.pravatar.cc/150?img=8',
                bio: 'Giriş yapmamış kullanıcı.',
                completedTests: 0,
                averageScore: 0,
                socialLinks: {
                    linkedin: '',
                    github: '',
                    website: '',
                },
                phone: '',
                address: '',
                websiteUrl: '',
                birthday: '',
                gender: '',
                work: [],
                skills: [],
                additionalInfo: [],
            };
        }
    });

    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({ ...userData });
    const [isImageChanged, setIsImageChanged] = useState(false);

    useEffect(() => {
        // Sayfa yüklendiğinde localStorage'dan verileri al (başlangıç state'i zaten yapıyor)
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('socialLinks.')) {
            const socialLinkName = name.split('.')[1];
            setEditedData((prevData) => ({
                ...prevData,
                socialLinks: {
                    ...prevData.socialLinks,
                    [socialLinkName]: value,
                },
            }));
        } else if (name.startsWith('work.')) {
            const [base, index, field] = name.split('.');
            const newWork = [...editedData.work];
            if (!newWork[parseInt(index)]) {
                newWork[parseInt(index)] = {};
            }
            newWork[parseInt(index)][field] = value;
            setEditedData((prevData) => ({ ...prevData, work: newWork }));
        } else if (name.startsWith('skills.')) {
            const [base, index] = name.split('.');
            const newSkills = [...editedData.skills];
            newSkills[parseInt(index)] = value;
            setEditedData((prevData) => ({ ...prevData, skills: newSkills }));
        } else if (name.startsWith('additionalInfo.')) {
            const [base, index, field] = name.split('.');
            const newAdditionalInfo = [...editedData.additionalInfo];
            if (!newAdditionalInfo[parseInt(index)]) {
                newAdditionalInfo[parseInt(index)] = {};
            }
            newAdditionalInfo[parseInt(index)][field] = value;
            setEditedData((prevData) => ({ ...prevData, additionalInfo: newAdditionalInfo }));
        }
        else {
            setEditedData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setEditedData((prev) => ({ ...prev, profileImage: imageUrl }));
            setIsImageChanged(true);
        }
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setUserData(editedData);
        localStorage.setItem('user', JSON.stringify(editedData));
        setIsEditing(false);
        setIsImageChanged(false);
    };

    const handleCancelClick = () => {
        setEditedData(userData);
        setIsEditing(false);
        setIsImageChanged(false);
    };

    const handleAddWork = () => {
        setEditedData(prevData => ({ ...prevData, work: [...prevData.work, { company: '', position: '' }] }));
    };

    const handleRemoveWork = (index) => {
        setEditedData(prevData => ({ ...prevData, work: prevData.work.filter((_, i) => i !== index) }));
    };

    const handleAddSkill = () => {
        setEditedData(prevData => ({ ...prevData, skills: [...prevData.skills, ''] }));
    };

    const handleRemoveSkill = (index) => {
        setEditedData(prevData => ({ ...prevData, skills: prevData.skills.filter((_, i) => i !== index) }));
    };

    const handleAddAdditionalInfo = () => {
        setEditedData(prevData => ({ ...prevData, additionalInfo: [...prevData.additionalInfo, { label: '', value: '' }] }));
    };

    const handleRemoveAdditionalInfo = (index) => {
        setEditedData(prevData => ({
            ...prevData,
            additionalInfo: prevData.additionalInfo.filter((_, i) => i !== index),
        }));
    };

    return (
        <div className="account-container-redesigned">
            <div className="profile-info-column">
                <div className="profile-header-left">
                    <div className="profile-image-large">
                        <img
                            src={isEditing && isImageChanged ? editedData.profileImage : userData.profileImage}
                            alt="Profil Fotoğrafı"
                        />
                        {isEditing && (
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ marginTop: '10px' }}
                            />
                        )}
                    </div>
                    <div className="profile-info-header">
                        <h1>{userData.name}</h1>
                        {/* Tekrar eden ad bilgisini kaldırdım */}
                    </div>
                    <div className="profile-actions">
                        {isEditing ? (
                            <>
                                <button className="btn-save" onClick={handleSaveClick}>Kaydet</button>
                                <button className="btn-cancel" onClick={handleCancelClick}>İptal</button>
                            </>
                        ) : (
                            <button className="btn-edit" onClick={handleEditClick}>Düzenle</button>
                        )}
                    </div>
                </div>
                {/* Sol sütuna eklenebilecek diğer alanlar */}
            </div>

            <div className="profile-details-column">
                <div className="profile-section contact-info">
                    <h2>İletişim Bilgileri</h2>
                    {isEditing ? (
                        <div className="edit-form-contact">
                            <div className="form-group">
                                <label>Telefon:</label>
                                <input type="text" name="phone" value={editedData.phone} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Adres:</label>
                                <input type="text" name="address" value={editedData.address} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>E-posta:</label>
                                <input type="email" name="email" value={editedData.email} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Web Sitesi:</label>
                                <input type="url" name="websiteUrl" value={editedData.websiteUrl} onChange={handleInputChange} />
                            </div>
                        </div>
                    ) : (
                        <ul>
                            {userData.phone && <li><strong>Telefon:</strong> {userData.phone}</li>}
                            {userData.email && <li><strong>E-posta:</strong> {userData.email}</li>}
                            {userData.websiteUrl && <li><strong>Web Sitesi:</strong> <a href={userData.websiteUrl} target="_blank" rel="noopener noreferrer">{userData.websiteUrl}</a></li>}
                            {!(userData.phone || userData.address || userData.email || userData.websiteUrl) && <p>İletişim bilgisi eklenmemiş.</p>}
                        </ul>
                    )}
                </div>

                <div className="profile-section skills">
                    <h2>Beceriler</h2>
                    {isEditing ? (
                        <div>
                            {editedData.skills.map((skill, index) => (
                                <div key={index} className="dynamic-field">
                                    <input type="text" name={`skills.${index}`} placeholder={`Becer #${index + 1}`} value={skill || ''} onChange={handleInputChange} />
                                    <button type="button" onClick={() => handleRemoveSkill(index)}>-</button>
                                </div>
                            ))}
                            <button type="button" onClick={handleAddSkill}>+ Yeni Beceri Ekle</button>
                        </div>
                    ) : (
                        <ul>
                            {userData.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                            {userData.skills.length === 0 && <p>Beceriler eklenmemiş.</p>}
                        </ul>
                    )}
                </div>

                <div className="profile-section additional-info">
                    <h2>Ek Bilgiler</h2>
                    {isEditing ? (
                        <div>
                            {editedData.additionalInfo.map((info, index) => (
                                <div key={index} className="dynamic-field">
                                    <input type="text" name={`additionalInfo.${index}.label`} placeholder="Etiket" value={info?.label || ''} onChange={handleInputChange} />
                                    <input type="text" name={`additionalInfo.${index}.value`} placeholder="Değer" value={info?.value || ''} onChange={handleInputChange} />
                                    <button type="button" onClick={() => handleRemoveAdditionalInfo(index)}>-</button>
                                </div>
                            ))}
                            <button type="button" onClick={handleAddAdditionalInfo}>+ Yeni Bilgi Ekle</button>
                        </div>
                    ) : (
                        <ul>
                            {userData.additionalInfo.map((info, index) => (
                                <li key={index}>
                                    <strong>{info?.label}:</strong> {info?.value}
                                </li>
                            ))}
                            {userData.additionalInfo.length === 0 && <p>Ek bilgi eklenmemiş.</p>}
                        </ul>
                    )}
                </div>
                {/* Sağ sütuna eklenebilecek diğer alanlar */}
            </div>
        </div>
    );
};

export default Account;