const API_URL = 'http://localhost:5000/api/launchers';

export const getLaunchers = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data.launchers;
};

export const getLauncherById = async (id) => {
    const res = await fetch(`${API_URL}/${id}`);
    const data = await res.json();
    return data.launcher;
};

export const createLauncher = async (launcherData) => {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(launcherData)
    });
    return res.ok;
};

export const deleteLauncher = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    return res.ok;
};