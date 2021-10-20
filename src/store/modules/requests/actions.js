export default {
  async contactCoach(context, payload) {
    const newRequest = {
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://find-coach-c96a2-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,
      {
        methods: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    const resonseData = await response.json();

    if (response.ok) {
      const error = new Error(response.message || 'Failed to send resquest.');
      throw error;
    }

    newRequest.id = resonseData.name;
    context.commit('addRequest', newRequest);
  },
};
